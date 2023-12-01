

import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({Poster,Title,imdbID,Year}) => {

    const handelFavourite=(e)=>{
        e.preventDefault()
        const existingFavorites = JSON.parse(localStorage.getItem('favoritemovies')) || [];
        const isAlreadyFavorite = existingFavorites.some((movie) => movie.imdbID === imdbID);
        
        if (!isAlreadyFavorite) {
            const newFavorites = [...existingFavorites, { imdbID, Title, Poster, Year }];
            localStorage.setItem('favoritemovies', JSON.stringify(newFavorites));
            alert('Added to Favorites!');
          } else {
            alert('This movie is already in Favorites!');
          }
    }


  return (
    <div className='movieCard'>
       <Link to={`/movies/${imdbID}`} ><img src={Poster} alt=''/></Link> 
        <p>{Title}</p>
        <span>Year : {Year}</span> <br/>
        <button onClick={handelFavourite}>Add to Favourites</button> 

    </div>
  )
}
