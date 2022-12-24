import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-700 p-2'>

         <Link to='/'>
        
            <div className=" font-bold text-2xl border-b pb-2 text-white border-green-500">K stream</div>
            </Link>

      <div className="navlinks">
        <ul className='flex'>
          <li className='mr-2 text-white text-sm border-b pb-2 border-green-500'><a href="https://kuipidprofile.netlify.app" target="_blank">My portfolio</a></li>
           
        </ul>
      </div>
    </div>
  )
}

export default Navbar