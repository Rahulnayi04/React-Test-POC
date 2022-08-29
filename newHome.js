import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Menu from '../MainHeader/Menu';
import Quantity from '../Quantity/Quantity';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const DUMMY_DATA = [
  {
    id: 1,
    name: "Sweater",
    description: "Highly effetive winter appreal which works even in Alaska",
    price: 250,
    image: "https://m.media-amazon.com/images/I/71NTRxfV1vL._UX569_.jpg"
  },
  {
    id: 2,
    name: "Grroming Kit",
    description: "Glam up like never on the red carpet",
    price: 120,
    image: "https://thumbs.dreamstime.com/b/men-grooming-kit-12039993.jpg"
  },
  {
    id: 3,
    name: "Shampoo",
    description: "Long and shiny hair which you have been dreaming for ever so long",
    price: 160,
    image: "https://thumbs.dreamstime.com/b/various-brands-shampoo-various-brands-shampoo-including-anti-dandruff-shampoo-192259470.jpg"
  },
];

let price1=0;
let price2=0;
let price3=0;
const Home = (props) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [inputValue, setInputValue] = useState();
  const quantityRef = useRef();
  const quantityButtonClickHandler = () => {
    setInputValue(prev => +prev + 1);
    console.log(quantityRef.current);
  }
  
  const totalQuantity = (count, price, id) => {
    id === 1 ? price1 = (count)*price : id === 2 ? price2 = (count)*price : price3 = (count)*price;
    
    // console.log(count, price2, price3);
    setTotalPrice(price1 + price2 + price3)
  }
  return (
    <div style={{fontSize: '22px'}}>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div style={{display: "flex", margin: "5rem", marginBottom: "1rem"}}>
        <p style={{flex:4.8 ,fontWeight: "bold"}}>Name</p>
        <p style={{flex:1, fontWeight: "bold"}}>Price</p>
        <p style={{flex:2, fontWeight: "bold"}}>Quantity</p>
      </div>

      {/* <div style={{ display: "flex", margin: "5rem" }}> */}
        {DUMMY_DATA.map(ele => 
          (
            <div style={{display: "flex", marginLeft: "5rem", marginBottom: "5rem"}}>
              <div style={{ flex: 4}}>
                <div style={{display: "flex"}}>
                  <img src={ele.image} style={{ height: "100px", width: "100px"}}></img>
                  <div style={{marginLeft: '10px', display: "flex", flexDirection: "column"}}>
                  <p>{ele.name}</p>
                  <p>{ele.description}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 0.75 }}>
                <p>{ele.price}</p> 
                
              </div>
              <div style={{ flex: 2 }}>
                <Quantity key={ele.id} price={ele.price} totalCount={totalQuantity} id={ele.id}/>
                
              </div>
            </div>
          )
        )}
      {/* </div> */}
      <br />
      <div style={{textAlign: "center", marginLeft: "31rem"}}>
        
        <h4 style={{marginRight:'20px'}}>Total</h4>
        <h4>{totalPrice}</h4>
      </div>
    </div>
  );
};

export default Home;
