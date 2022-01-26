import React from "react"
import { useState } from "react"
import MenuItems from "./MenuItems";

export default function MenuCard({ item }) {

    let [inCart, setInCart] = useState(false);

    const addToCart = async e => {    
        setInCart(!inCart);
        if(!inCart){
        e.target.classList.replace(e.target.classList[4],"btn-success");}
        else{
        e.target.classList.replace(e.target.classList[4],"btn-warning");
        }
    }

    console.log(item.f_desc)
    console.log(item.f_price)
    console.log(item.f_name)

    return(
      <div class="card">
      <div class="container">
        <h4><b className="cardItem">{item.f_name}</b></h4>
        <div className="cardItem">{item.f_desc}</div>
        <p className="inner cardItem">{item.f_price}</p>
        <button className="bi bi-cart cardBtn btn btn-warning" onClick={e => addToCart(e)}>{inCart ? " Added" : " Add to Cart"}</button>
      </div>
      </div>
    )
}