// src/components/AdvancedSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const AdvancedSearch = () => {
  const [formData, setFormData] = useState({
    start_year: '2001',
    min_imdb: '6',
    max_imdb: '9',
    genre: 'action',
    type: 'movie',
    sort: 'latest',
  });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenreChange = (selectedGenre) => {
    setFormData(prevState => ({
      ...prevState,
      genre: selectedGenre
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: formData.start_year,
          end_year: '2022',
          min_imdb: formData.min_imdb,
          max_imdb: formData.max_imdb,
          genre: formData.genre,
          language: 'english',
          type: formData.type,
          sort: formData.sort,
          // page: 1
        },
        headers: {
          'x-rapidapi-key': '8749f4ba6emsh89916ded9f91ce5p1d1057jsn6904bd4ef414',
          'x-rapidapi-host': 'ott-details.p.rapidapi.com'
        }
      });
      setMovies(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-7 text-center text-white">Advanced Search</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center border border-white rounded pb-10">

        {/* this div is to merge and center the 5 fields into one */}
        <div className='flex flex-wrap gap-4 rounded p-5 my-10 items-center justify-center w-[100%]'>
          <div className='flex items-center border border-white rounded p-5 w-[250px]'>
            <label className="text-white mr-2 font-semibold">Start Year</label>
            <input
              type="number"
              name="start_year"
              value={formData.start_year}
              onChange={handleChange}
              className="p-1 border rounded w-[100px] ml-auto"
            />
          </div>

          <div className='flex items-center border border-white rounded p-5 w-[250px]'>
            <label className="text-white mr-2 font-semibold">Minimum IMDB</label>
            <input
              type="number"
              step="0.1"
              name="min_imdb"
              value={formData.min_imdb}
              onChange={handleChange}
              className="p-1 border rounded w-[60px] ml-auto"
            />
          </div>

          <div className='flex items-center border border-white rounded p-5 w-[250px]'>
            <label className="text-white mr-2 font-semibold">Maximum IMDB</label>
            <input
              type="number"
              step="0.1"
              name="max_imdb"
              value={formData.max_imdb}
              onChange={handleChange}
              className="p-1 border rounded w-[60px] ml-auto"
            />
          </div>

          <div className='flex items-center border border-white rounded p-5 w-[250px]'>
            <label className="text-white mr-2 font-semibold">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-[70%] p-2 border rounded ml-auto"
            >
              <option value="movie">Movie</option>
              <option value="tv-series">TV Series</option>
            </select>
          </div>

          <div className='flex items-center border border-white rounded p-5 w-[250px]'>
            <label className="text-white mr-2 font-semibold">Sort By</label>
            <select
              name="sort"
              value={formData.sort}
              onChange={handleChange}
              className="w-[70%] p-2 border rounded ml-auto"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col items-center border border-white rounded p-5 w-[50%]'>
          <label className="text-white mr-4 flex-shrink-0 font-semibold text-xl pb-5">Genre</label>
          <div className="flex flex-wrap gap-2 justify-center">
            {['action', 'comedy', 'adventure', 'animation', 'drama', 'mystery', 'crime', 'biography', 'documentary', 'romance', 'fantasy'].map(genre => (
              <button
                key={genre}
                type="button"
                className={`px-3 py-1 border rounded ${formData.genre === genre ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                onClick={() => handleGenreChange(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="p-3 mt-12 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-300"
          style={{ width: '250px' }}
        >
          Search
        </button>
      </form>

      {loading && <div className="text-center mt-4 text-xl text-white">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">Error: {error}</div>}
      <MovieList movies={movies}/>
    </div>
  );
};

export default AdvancedSearch;
