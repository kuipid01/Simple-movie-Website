import React, { useEffect, useState } from "react";

import heroImg from "../assets/model.jpg";
import { useGetAllMoviesQuery } from "../redux/moviesCore";
import MoviesPage from "./MoviesPage";
const homePageDefault={
  Poster:heroImg,
  Title:"Loading",
  time:"loading...",
  cat:"loading...."
}
const Home = () => {
  const [movie, setMovie] = useState()
  const {data , isFetching,error} = useGetAllMoviesQuery()
  useEffect(() => {
    if (data) {
      let movie1 = data.Search[1]
      setMovie(movie1)
    }
   else{
      setMovie(homePageDefault)
    }
  },)
  
  return (
    <>
      <div className="flex flex-col justify-center  h-[70vh] w-full  relative">
        
        <div className="w-full   text z-20 justify-center  flex flex-col text-white pl-12">
    
          <h1 className="font-semibold text-3xl mb-3 w-max">
            {movie?.Title}
          </h1>
          <div className="time flex mb-5 font-normal">
          <h3>{movie?.cat}</h3> <span className="ml-3">{movie?.time}</span>
          </div>
          
          <button className=" w-max pt-3 pl-5 pr-5 pb-3 rounded bg-green-500 ">
            View More
          </button>
        </div>
        <img
          className="w-full h-full object-cover absolute  top-0 left-0"
          src={movie?.Poster}
          alt=""
        />
        <div className="overlay absolute top-0 left-0 w-full h-full opacity-90 bg-black z-10"></div>
      
      </div>
      <MoviesPage/> 
    </>
  );
};

export default Home;
