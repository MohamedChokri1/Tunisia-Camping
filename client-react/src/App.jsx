import {useEffect, useState} from 'react'
import {  Routes , Route , useNavigate } from 'react-router-dom'
import './App.css'
import SellerHome from './Seller/component/SellerHome.jsx'
import CreateProduct from './Seller/component/CreateProduct.jsx'
import SellerOneProduct from './Seller/component/SellerOneProduct.jsx'
import Profile from './Seller/component/Profile.jsx'
import EditProfile from './user/edit/EditProfile.jsx'
import Login from './auth/login.jsx'
import Register from './auth/register.jsx'
import AdminPage from './admin/AdminPage.jsx'
import axios from 'axios'
import ProductsDetails from './user/ProductDetail.jsx'
import Home from './user/HomePage/Home.jsx'
import Cart from './cart/Cart.jsx'
import Wishlist from './wishList/WishList.jsx'
import About from './Aboutus/About.jsx'
import GeneralHome from './auth/GeneralHome.jsx'

function App() {
   

  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get("http://localhost:3000/seller/getAll").then((res)=>{
     setProducts(res.data)
    
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  

  const showProduct=(newData)=>{
      navigate(`/${newData.id}`)   
  }


  const handleClick = (product) => {

    navigate(`/one/${product.name}`, { state: product });
  };

  return (
    
      <div> 
        
        
       
         <Routes>
         <Route path='/' element={<GeneralHome handleClick={handleClick}  />} />
    
         <Route path="/AdminPage" element={<AdminPage />}/>
         <Route path="/Seller" element={<SellerHome products={products} showProduct={showProduct}b/>} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
           <Route path='/addProduct' element={<CreateProduct refresh={refresh} setRefresh={setRefresh}/>} />
          <Route path='/:id' element={<SellerOneProduct refresh={refresh} setRefresh={setRefresh}/>} />
          <Route path='/SellerProfile/:id' element={<Profile/>} />
          <Route path='/updatePDrofileClient' element={<EditProfile/>} />
          <Route path='/one/:name' element={<ProductsDetails/>} />
          <Route path='/Home' element={<Home handleClick={handleClick}  />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/WishList' element={<Wishlist/>} />
          <Route path='/About' element={<About/>} />
              </Routes>
         </div>
         )    
    }

export default App