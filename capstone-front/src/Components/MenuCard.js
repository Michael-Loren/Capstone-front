import React from "react"
import { useState } from "react"

export default function MenuCard() {

    let [inCart, setInCart] = useState(false);

    const addToCart = async e => {    
        setInCart(!inCart);
        if(!inCart){
        e.target.classList.replace(e.target.classList[4],"btn-success");}
        else{
        e.target.classList.replace(e.target.classList[4],"btn-warning");
        }
    }

    return(
        <div className="card">
            <img alt = "" prop = "" src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/sushi-2853382.jpg" className="foodImage"/>
            <div className="container">
                <div className="bottomCard">
                <h4><b>Food Name</b></h4>
                    <p className="inner">$$$$</p>
                    <button className="bi bi-cart navBtn btn btn-warning" onClick={e => addToCart(e)}>{inCart ? " Added" : " Add to Cart"}</button>
                </div>
            </div>
        </div>
    )
}