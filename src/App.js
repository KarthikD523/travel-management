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
          <Route path='/travel-management' element={<Home />} />
          <Route path='/travel-management/SearchLocation' element={<SeachLocation />} />
          <Route path='/travel-management/SearchLocation/:locationName/' element={<Properties />} />
          <Route path='/travel-management/SearchLocation/:locationName/:propertyId' element={<PropertyDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
