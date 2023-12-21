import "./Home.css";
import React, {useEffect, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import iphone from "../../assets/iphone.jpg"
import axios from "axios"
import Star from "../../assets/Vector.svg";

 

 function Home(){
  const [data, setData] = useState([]);
  console.log(data);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const navigate = useNavigate();
  
  const ByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/clients/productByCategory/${category}`
      );
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  const handleClick = (product) => {
    navigate("/ProductDetails", { state: product });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/seller/getAll"
      );
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedProducts = showAllProducts ? data : data.slice(0, 6);

  return (
 <div  className="homePage" >  
  <div   className="startOfthepage">
    <div  className="category">
<h4  onClick={()=>{ByCategory("Tent")}}>Tent</h4>
<h4  onClick={()=>{ByCategory("Sleeping bags")}}>Sleeping bags</h4>
<h4>Camping pillow</h4>
<h4>flashlights</h4>
<h4>Camp chairs</h4>
<h4>Camp table</h4>
<h4>Lantern</h4>

    </div>
    <div className="pub">
<img    style={{width:"90rem",height:"400px"}} src={iphone }alt="" />
    </div>
  </div>


  <div className="productContainer">
        {displayedProducts.map((product) => (
          <div key={product.id} className="productCard">
  
  <img   onClick={()=>{
    handleClick(product)
  }} src={product.images[2].url} alt={product.name} />

           <div className="Details">
            <p id="Product_Title">{product.name}</p>
            <div className="Details_reviews">
              <div id="reviews">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p id="availibilty">In Stock</p>
            </div>
            <p    id="price">${product.price}</p>
            </div>
            {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
          </div>
        ))}
      </div>
      {!showAllProducts && (
        <button   id="add" onClick={() => setShowAllProducts(true)}>View All</button>
      )}
 </div>
 



)}
 export default Home