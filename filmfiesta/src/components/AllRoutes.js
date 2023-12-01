import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  SignIn  from './SignIn'
import Navber from './Navber'
import  Movies  from './Movies'
import { MovieDetails } from './MovieDetails'
import { FavouriteMovie } from './FavouriteMovie'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/' element={<Navber/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/:imdbID' element={<MovieDetails/>}></Route>
        <Route path='/favourite' element={<FavouriteMovie/>}></Route>
    </Routes>
  )
}
