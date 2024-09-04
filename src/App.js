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
            <Route path="/" element={<div className="text-center text-white text-2xl mt-[10%]">Ahoy! Welcome aboard... advanced search is currently the only working feature</div>} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            {/* <Route path="/explore" element={<div className="text-center">Explore Page</div>} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
