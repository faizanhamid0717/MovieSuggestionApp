
import React, { useEffect, useState } from 'react'
import './FavouriteMovie.css'
export const FavouriteMovie = () => {   
    const [favData,setFavData]=useState([])

    useEffect(()=>{
        const Favourite = JSON.parse(localStorage.getItem("favoritemovies")) || []
        console.log("Favourite",Favourite)
        setFavData(Favourite)
    },[])

console.log(favData)

  return (
     <div className='main-cont'>
        <h1 className='head-fav'>Favourites</h1>
     
    <div className='favouriteCont'> 
      
        {favData?.map((ele)=>(
             <div className='fav-movie' key={ele.imdbID}>
             <div><img src={ele.Poster} alt=''/></div>
             <div className='title'>{ele.Title}</div>
          </div>
        ))}
           
      </div>
    </div> 
  )
}
