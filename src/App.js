import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeachLocation from './Pages/SeachLocation';
import Properties from './Pages/Properties';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SearchLocation' element={<SeachLocation />} />
          <Route path='/SearchLocation/:locationName/' element={<Properties />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
