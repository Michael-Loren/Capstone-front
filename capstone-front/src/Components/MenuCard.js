import React from "react";
import { useState } from "react";
import MenuItems from "./MenuItems";

export default function MenuCard({ item }) {
    let [inCart, setInCart] = useState();
    const [cartItems, setCartItems] = useState([]);

      const postToCart = async () => {
          try {
            const body = {}
              const response = await fetch("http://localhost:5000/shoppingCart",{
                method: "POST",
                headers:{token: localStorage.token}
              });
              const jsonData = await response.json();
              setCartItems(jsonData);
              console.log(jsonData)
          } catch (err) {
              console.error(err);
          }
      }

    const addToCart = async e => {    
        setInCart(!inCart);
        if(!inCart){
        e.target.classList.replace(e.target.classList[4],"btn-success");
        postToCart(e)}
        else{
        e.target.classList.replace(e.target.classList[4],"btn-warning");
        }
    }
  

  return (
    <div class="card">
      <div class="container">
        <h4>
          <b className="cardItem">{item.f_name}</b>
        </h4>
        <div className="cardItem">{item.f_desc}</div>
        <p className="inner cardItem bottom">{item.f_price}</p>
        <button
          className="bi bi-cart cardBtn btn btn-warning bottom"
          onClick={(e) => addToCart(e)}
        >
          {inCart ? " Added" : " Add to Cart"}
        </button>
      </div>
    </div>
  );
  }
