import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Cart from './components/Cart';
import About from './components/About';
import Cart1 from './components/Cart1';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
   <>
   <BrowserRouter>
   <CartProvider>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/a' element={<Signin/>} />
    <Route path='/b' element={<Signup/>} />
    <Route path='/c' element={<Cart/>} />
    <Route path='/e' element={<Cart1/>} />
    <Route path='/d' element={<About/>} />
   </Routes>
   </CartProvider>
   </BrowserRouter>
   </>
  );
}

export default App;
