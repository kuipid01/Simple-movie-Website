import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';


import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails';
// import Login from './Routes/Login'
// import Mycart from './Routes/Mycart'
// import Product from './Routes/Product'
const App = () => {
 
  return (
    <div className="relative h-full">
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              
              {/* <Route path="/login" element={<Login/>} />
              <Route path="/mycart" element={<Mycart/>} />
              <Route path="/:id" element={<Product/>} /> */}
              
            </Routes>
            
    </div>
  );
};

export default App;
