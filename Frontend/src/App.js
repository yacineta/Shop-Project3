
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Componrnts/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSinup from './Pages/LoginSinup';
import Footer from './Componrnts/Footer/Footer';
import banner_Woman from '../src/Componrnts/Assets/banner_Woman.jpg'
import banner_Man from '../src/Componrnts/Assets/banner_man.jpg'
import banner_Kids from '../src/Componrnts/Assets/banner_Kids.jpg'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element = {<ShopCategory banner={banner_Man} category="men"/> }/>
        <Route path='/womens' element = {<ShopCategory banner={banner_Woman} category="women"/>}/>
        <Route path='/kids' element = {<ShopCategory banner={banner_Kids} category="kid"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productId' element = {<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/Login' element = {<LoginSinup/>}/>
        
      </Routes>

     <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
