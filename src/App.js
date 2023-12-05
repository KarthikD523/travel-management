import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeachLocation from './Pages/SeachLocation';
import Properties from './Pages/Properties';
import PropertyDescription from './Pages/PropertyDescription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SearchLocation' element={<SeachLocation />} />
          <Route path='/SearchLocation/:locationName/' element={<Properties />} />
          <Route path='/SearchLocation/:locationName/:propertyId' element={<PropertyDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
