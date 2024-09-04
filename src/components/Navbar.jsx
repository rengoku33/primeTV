import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-500 text-xl">Home</Link>
          </li>
          <li>
            <Link to="/advanced-search" className="hover:text-blue-500 text-xl">Advanced Search</Link>
          </li>
          {/* <li>
            <Link to="/explore" className="hover:text-gray-300">Explore</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
