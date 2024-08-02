import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyGoogle from './Component/MyGoogle';

function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MyGoogle />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;

