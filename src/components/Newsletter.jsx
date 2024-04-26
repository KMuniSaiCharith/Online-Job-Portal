import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    // You can customize the alert message as needed
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Subscribed successfully"
      });
    // Clear the input field after submission
    event.target.reset();
  };

  const handleUploadResume = () => {
    // You can customize the alert message as needed
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
  };

  return (
    <div>
        <div>
            <h3 className='text-lg font-hold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email Me for Jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Details</p>
            <form onSubmit={handleSubscribe} className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type='submit' value={"Subscribe"} className='justify-center w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </form>
        </div>

        {/* THE SECOND PART */}
        <div className='mt-20'>
            <h3 className='text-lg font-hold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Showcase your previous projects
            </h3>
            <p className='text-primary/75 text-base mb-4'>Submit GitHub profile</p>
            <div className='w-full space-y-4'>
                <button onClick={handleUploadResume} className='justify-center w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'>Submit</button>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;
