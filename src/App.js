
import './App.css';
import Cart from './customer/components/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navigation/>

      <div>
        {/* <HomePage/>   */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        <Cart/>
      </div> 
      <Footer/>    
    </div>
  );
}

export default App;
