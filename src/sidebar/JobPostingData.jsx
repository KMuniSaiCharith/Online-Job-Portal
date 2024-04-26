import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now=new Date()
    //console.log(now)
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)
    //console.log(twentyFourHoursAgo)

    // convert to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10);

    //console.log(twentyFourHoursAgoDate)
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Job Posting Data</h4>
    <div>
        <label className='sidebar-label-container'>
            <input 
            type="radio" 
            name="test" 
            id="test" 
            value="" 
            onChange={handleChange}
            />
            <span className='checkmark'></span>All Time
        </label>

        <InputField 
        handleChange={handleChange} 
        value={twentyFourHoursAgoDate}
        title="Last 24 Hours" 
        name="test 2"
        />

        <InputField 
        handleChange={handleChange} 
        value={sevenDaysAgoDate}
        title="Last 7 Days" 
        name="test 2"
        />

        <InputField 
        handleChange={handleChange} 
        value={thirtyDaysAgoDate}
        title="Last 30 Days" 
        name="test 2"
        />
    </div>
</div>
  )
}

export default JobPostingData