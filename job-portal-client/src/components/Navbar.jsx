import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaXmark,FaBarsStaggered} from  "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    
    const navItems = [
        {path: "/", title: "Start a search" },
        {path: "/my-job", title: "My Jobs" },
        {path: "/salary", title: "Salary Estimate" },
        {path: "/post-job", title: "Post a Job" },
    ]
  return (
    <header className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center gap-2 text-black">
                <svg 
                xmlns="https://w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"             
                >
                    <circle
                    cx="12.0143"
                    cy="12.5143"
                    r="12.0143"
                    fill="#cddbfa"
                    fillOpacity="2"
                    />
                    <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#f0f4ff" />
                </svg>
                <span>JobNexus</span>
            </a>

            {/* nav itseems for large devices */}
            <ul className='hidden md:flex gap-12 '>
            {navItems.map(({ path, title }) => (
                <li key={path} className="text-base">
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                    isActive
                        ? " active"
                        : ""
                    }
                >
                    {title}
                </NavLink>
                </li>
            ))}
            </ul>


            {/* signup and login btn */}
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>

                <Link to="/login" className="py-2 px-5 border rounded bg-white text-black">Log In</Link>
                <Link to="/signup" className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
                
            </div> 

            {/*Mobile menu */}
            <div className="md:hidden block">
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                    }
                </button>
            </div>
        </nav>

        {/* nav items for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>

            <ul>
            {
                    navItems.map(({path,title}) => (
                        <li key={path} className="text-base text-white first:text-white py-1">
                             <NavLink
                    to={path}
                    className={({ isActive, isPending }) => 
                    isActive ? "active": ""
                    }
                  >
                    {title}
                  </NavLink>
                        </li>
                    ))
                }

                <li className='text-white py-1'><Link to="/login" >Log in</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar