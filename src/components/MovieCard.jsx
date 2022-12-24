import React from 'react'
import testImg from '../assets/model.jpg'
import {Link} from 'react-router-dom'
const MovieCard = ({img,title}) => {
  return (
    <Link to={`/movie/${title}`}>
   
    <div className= " mr-4 md:w-[150px]  sm:w-[120px] sm:h-[150px] lg:h-[300px]  lg:w-[200px] bg-red-500  relative rounded-sm mt-4 mb-4">
      <img src={img} className="w-full h-full object-cover object-center rounded " alt="" />
      <div className="overlay absolute top-0 left-0 bg-black opacity-60 w-full  h-full">

      </div>
     </div>
     </Link>
  )
}

export default MovieCard