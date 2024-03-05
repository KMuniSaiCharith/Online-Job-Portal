import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-hold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email Me for Jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Details</p>
            <div className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type='submit'value={"Subscribe"} className='justify-center w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>

        {/* THE SECOND PART */}
        <div className='mt-20'>
            <h3 className='text-lg font-hold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get Notified Faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>Details</p>
            <div className='w-full space-y-4'>
                <input type='submit'value={"Upload Your Resume"} className='justify-center w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>

    </div>
  )
}

export default Newsletter