import { useState } from 'react';
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';
import Swal from 'sweetalert2';

const handleReload = () => {
    window.location.reload();
}

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch("https://online-job-portal-api.onrender.com/post-job",{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((result) => {console.log(result);
            console.log(result);
            if(result.acknowledged === true){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, create it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Created!",
                        text: "Your job has been created.",
                        icon: "success"
                      });
                      handleReload();
                    }
                  });
            }
            reset()
        });
      };

      const options = [
        {value:"JavaScript", label:"JavaScript"},
        {value:"C++", label:"C++"},
        {value:"HTML", label:"HTML"},
        {value:"CSS", label:"CSS"},
        {value:"React", label:"React"},
        {value:"NodeJS", label:"NodeJS"},
        {value:"MongoDB", label:"MongoDB"},
        {value:"Redux", label:"Redux"}
      ]
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-4'>
        {/* Form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/*First Row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Job Title</label>
                        <input type="text" defaultValue={"Web Developer"}{...register("jobTitle")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Company Name</label>
                        <input type="text" placeholder='Ex: Microsoft'{...register("companyName")} className='create-job-input'/>
                    </div>

                </div>

                {/*Second Row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Minimum Salary</label>
                        <input type="text" placeholder='$ 20K'{...register("minPrice")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Maximum Salary</label>
                        <input type="text" placeholder='$ 120K'{...register("maxPrice")} className='create-job-input'/>
                    </div>

                </div>

                {/*Third Row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Salary Type</label>
                        <select {...register("Title", { required: true })} className='create-job-input'>
                            <option value="">Select Your Salary Type</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Job Location</label>
                        <input type="text" placeholder='Ex: New York'{...register("jobLocation")} className='create-job-input'/>
                    </div>

                </div>

                {/*Fourth Row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Job Posting Date</label>
                        <input type="date" placeholder='Ex: 2023-11-03'{...register("postingDate")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Experience Level</label>
                        <select {...register("experienceLevel")} className='create-job-input'>
                            <option value="">Chooose Your Experience</option>
                            <option value="NoExperience">Hourly</option>
                            <option value="Internship">Internship</option>
                            <option value="WorkRemotely">Work Remotely</option>
                        </select>
                    </div>

                </div>

                {/*Fifth Row */}
                <div>
                <label className='block mb2 text-lg'>Required Skill Set</label>
                <CreatableSelect 
                defaultValue={selectedOption} 
                onChange={setSelectedOption}
                options={options}
                isMulti
                className='create-job-input py-4' 
                />
                </div>

                {/*Sixth Row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Company Logo</label>
                        <input type="text" placeholder='Past your company logo URL : https://weshare.com/img1'{...register("companyLogo")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb2 text-lg'>Employment Type</label>
                        <select {...register("employmentType")} className='create-job-input'>
                            <option value="">Chooose Your Experience</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>

                </div>

                {/*Seventh Row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none' rows={6} placeholder:text-gray-700 defaultValue="Job Description"{...register("description")}/>
                </div>

                {/*Last Row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Posted By</label>
                    <input className="create-job-input"type="email" placeholder='your email'{...register("postedBy")}/>

                </div>



                <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
            </form>

        </div>
    </div>
  )
}

export default CreateJob
