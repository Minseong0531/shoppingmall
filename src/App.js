import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import CartPage from './page/CartPage';


function App() {

  return (
    <div className="App">
      <TopBanner />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
