import React from "react"
import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"

export default function MenuItems() {

    const [foodItems, setFoodItems] = useState([])

    const fetchFoodData = async () => {
        try {
            const response = await fetch("http://localhost:5000/Food");
            const jsonData = await response.json();
            setFoodItems(jsonData);
            console.log(foodItems)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchFoodData()
    },[])

    return(
        // formats the grid
        <div className="gridContainer"> 
        <div className="itemsContainer">
        {foodItems.map(index => {
            {/* formats the container */}
            return(
                <MenuCard item = {index}/>
            )
            })}
        </div>
        </div>
    );
}
// {foodItems.map(index => {
//     return(
//         <div class="card">
//      <div class="container">
//      <h4><b>{index.f_name}</b></h4>
//      <p className="inner">{index.f_price}</p>
//      <div>{index.f_desc}</div>
//      <button className="bi bi-cart navBtn btn btn-warning" onClick={e => addToCart(e)}>{inCart ? " Added" : " Add to Cart"}</button>
//      </div>
//  </div>
// )
// })}