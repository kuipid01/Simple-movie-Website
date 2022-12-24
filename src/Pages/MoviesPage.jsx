import React , {useEffect,useState} from 'react'

import MovieCard from '../components/MovieCard'
import { useGetAllMoviesQuery } from '../redux/moviesCore'
import { useDispatch, useSelector } from 'react-redux';
const MoviesPage = () => {
  const movies = [{
    "Title": "The Lion King",
    "Year": "2019",
    "Runtime": "118 min",
    "category":"Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
  },
  
  {
    "Title": "Mowgli: Legend of the Jungle",
    "Year": "2018",
    "Runtime": "104 min",
    "category":"Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
  },
  {
    "Title": "Doctor Strange",
    "Year": "2016",
    "Runtime": "115 min",
    "category":"Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "Runtime": "101 min",
    "category":"Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  },
  {
    "Title": "The Notebook",
    "Year": "2004",
    "Runtime": "123 min"
  }
  ]
  const [films, setFilms] = useState()
  const {data, isFetching,error} = useGetAllMoviesQuery();
useEffect(() => {
 if (data) {
  setFilms(data.Search.slice(0,5))

 }

},[data])
  
  return (
<>

<div className="movies__container overflow-x-hidden bg-black w-full flex flex-col  p-10 pt-4" >
<div className="latest__movies  w-full">
<h3 className='border-b text-gray-300 pb-2 w-full'>Latest Movies</h3>
<div className="movies__row flex w-max overflow-x-hidden">
  {
    films?.map(movie => (
      

     
<MovieCard
img={movie.Poster}
title={movie.Title}
/>

    ))
  }
  
</div>
</div>
<div className="latest__movies  w-full">
<h3 className='border-b text-gray-300 pb-2 w-full'>Latest Series</h3>
<div className="movies__row flex w-max overflow-x-hidden mb-5">
  {
    films?.map(movie => (
      

     
<MovieCard
img={movie.Poster}

title={movie.Title}
/>

    ))
  }
  
</div>
</div>
</div>
</>
  )
}

export default MoviesPage