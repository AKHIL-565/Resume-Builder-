import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Method from './Method';
import Home from './components/Home';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/method" element={<Method />} />
            </Routes>
        </Router>
    );
}

export default App;
