import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import DirectorsPage from './pages/DirectorsPage';
import MoviesPage from './pages/MoviesPage';
import MyNavBar from './components/MyNavBar';  // Updated path

function App() {
    return (
        <Router>
            <MyNavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/directors" element={<DirectorsPage />} />
                <Route path="/movies" element={<MoviesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
