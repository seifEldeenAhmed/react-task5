import './App.css';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Product } from './Components/Product'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='products/:id' element={<Product />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
