// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) return <div className="text-center mt-4 text-white ">No movies found.</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
      {movies.map((movie) => (
        <div key={movie.imdbid} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={movie.imageurl[0]}
            alt={movie.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-gray-600">Released: {movie.released}</p> 
            <p className="text-gray-600">IMDB Rating: {movie.imdbrating}</p> 
            <p className="text-gray-600">Genre: {movie.genre.join(', ')}</p>
            <p className="mt-2 text-gray-700">{movie.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
