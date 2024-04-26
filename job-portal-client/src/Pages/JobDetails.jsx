import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    fetch(`http://54.211.233.3:3000/all-jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  const handleApply = async() =>{
    const { value: url } = await Swal.fire({
        input: "url",
        inputLabel: "URL address",
        inputPlaceholder: "Enter the URL"
      });
      if (url) {
        Swal.fire(`Entered URL: ${url}`);
      }
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={"Single Job Page"} path={"Single Job"}/>
      {job ? (
        <>
          {/* <h2>JobDetails: {id}</h2> */}
          <h1>Title : {job.jobTitle}</h1>
          <p>Company : {job.companyName}</p>
          <p>Description : {job.description}</p>
          <p>Salary : {job.minPrice}₹ - {job.maxPrice}₹</p>
          <button className='bg-blue px-8 py-2 text-white ' onClick={handleApply}>Apply Now</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;
