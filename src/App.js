import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto py-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
