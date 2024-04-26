import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ;

useEffect(() => {
  setIsLoading(true);
  fetch("http://54.211.233.3:3000/all-jobs").then(res => res.json()).then(data => {
    //console.log(data)
    setJobs(data);
    setIsLoading(false)
  }
  )
}, [])

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  //handle location change
  const [locationquery, setLocationQuery] = useState("");
  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value)
    
  }

  // filter by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) != -1);
  const locationFilteredItems = jobs.filter((job) => job.jobLocation.toLowerCase().indexOf(locationquery.toLowerCase()) != -1);

  //---------------- RADIO FILTERING ------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //---------------- Button based filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //---------------- calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }

  // function for the next page 
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1);
    }
  }

  // function for the prev page
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  // main function
  const filteredData = (jobs, selected, query, locationquery) => {
    let filteredJobs = jobs;

    // filtering input items
    if(query){
      filteredJobs = filteredItems;
    }

    if(locationquery){
      filteredJobs = locationFilteredItems;
    }

    //category filtering
    if(selected){

      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, Title, experienceLevel, employmentType, postingDate}) => {
          return jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          Title.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      });
      

    }
    // slice the data based on current pages
    const {startIndex,endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
  } 

  const result = filteredData(jobs, selectedCategory, query, locationquery);
  return (
    <div>
      <Banner query={query} locationQuery={locationquery} handleInputChange={handleInputChange} handleLocationChange={handleLocationChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side  */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
          </div>

        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading ? (<p className="font-medium">Loading.....</p>) : result.length > 0 ?(<Jobs result={result}/>) : <>
            <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
            <p> No Data Found ! </p>
            </>
          }
          {/*Pagination here */}
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button className="hover:underline" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button className="hover:underline" onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage) }>Next</button>
              </div>
            ) : ""
          }
          </div>

        {/* Right side */}
        <div className="bg-white p-4 rounded"><Newsletter/></div>
      </div>
    </div>
  )
}

export default Home