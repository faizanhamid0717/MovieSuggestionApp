

import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const [movieDetails,setMovieDetails] =useState('')
  const {imdbID}=useParams()

    useEffect(()=>{
        getMovieDetails()
    },[])

    const getMovieDetails=async()=>{
      const res = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=946c8fd2`)
      const data = await res.json()
      console.log("MovieDetailsData",data)
      setMovieDetails(data)
    }
// console.log(movieDetails)

// const {Poster,Title,Year,Type}=movieDetails
  return (
    <div className='cont-Details'>
          <div className='details'>
            <div className='content'>
                <h2>{movieDetails.Title}</h2>
                <h3>Actors : {movieDetails.Actors}</h3>
                <h3>{movieDetails.Genre}</h3>
                <span>Year : {movieDetails.Year}</span> 
                <span> {movieDetails.Type} </span> 
                <span> | Language : {movieDetails.Language} </span>
                <button>Watch Now</button>

            </div>
            <div className='poster'>
                <img src={movieDetails.Poster} alt=''/>
            </div>
          </div>
    </div>
  )
}
