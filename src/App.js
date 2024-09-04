// import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdvancedSearch from './components/AdvancedSearch';
// import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<div className="text-center">Welcome to the Movie App</div>} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/explore" element={<div className="text-center">Explore Page</div>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
