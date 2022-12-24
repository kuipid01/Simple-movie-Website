import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetAllMoviesQuery } from "../redux/moviesCore";
const MovieDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetAllMoviesQuery();
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (isFetching) {
      setMovies([]);
    }
    if (data) {
      setMovies(data.Search);

      
      movies?.map((movie) => {
        console.log(movie.Title, id);
        if (movie.Title === id) {
          setMovie(movie);
          console.log(movie);
        } else {
          return;
        }
      });
    }
  });

  return (
    <div className="detait w-full p-6 bg-black text-white">
      <img
        className="w-full  object-cover object-center h-[600px]"
        src={movie?.Poster}
        alt=""
      />
      <h1 className="w-full  font-bold text-3xl mt-4 mb-4 ">{movie?.Title}</h1>
      <div className="desc flex  items-center">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src={movie?.Poster}
          alt=""
        />
        <small className=" mr-4 ml-4">Category:  {movie?.Type}</small>
        
        <small>Year : {movie?.Year
}</small>
        
        
      </div>
    </div>
  );
};

export default MovieDetails;
