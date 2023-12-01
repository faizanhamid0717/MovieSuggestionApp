import { useEffect, useState } from 'react';
import './Movies.css';
import { URL } from '../Utils/constrains';
import { MovieCard } from './MovieCard';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('all');
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setMovieData(data.Search);
    } catch (error) {
      console.log({ err: error });
    }
  };

  const handleSearch = () => {
    const filteredMovies = movieData.filter((movie) =>
      movie.Title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setMovieData(filteredMovies);
  };

  const handleSortAndFilter = () => {
    const sortedAndFilteredMovies = [...movieData];

    if (sortOption === 'asc') {
      sortedAndFilteredMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOption === 'desc') {
      sortedAndFilteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    if (filterOption === 'Releasing year') {
      // Assuming there's a state variable for selectedYear
      // Modify this logic based on your data structure
    //   sortedAndFilteredMovies.filter((movie) => movie.Year === selectedYear);
    }

    setMovieData(sortedAndFilteredMovies);
  };

  useEffect(() => {
    handleSortAndFilter();
  }, [sortOption, filterOption]);

  return (
    <div className="container">
      <div className='topRow'>
        <div className='applogo'>
          <Link to={`/`}><span>FilmFiesta</span></Link>
        </div>
        <div className='searchBar'>
          <input
            placeholder='enter movie'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className='sort'>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="all">Sort</option>
            <option value="asc">Low to High</option>
            <option value='desc'>High to Low</option>
          </select>
        </div>
        <div className='filter'>
          <select onChange={(e) => setFilterOption(e.target.value)}>
            <option value="all">Filter</option>
            <option value="year">Releasing year</option>
          </select>
        </div>
      </div>

      <h1>Movies</h1>
      <div className='movies'>
        {Array.isArray(movieData) &&
          movieData?.map((ele) => (
            <div key={ele.imdbID}>
              <MovieCard {...ele} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movies;
