import React from "react"

export default function MenuCard() {
    return(
        <div class="card">
            <img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/sushi-2853382.jpg" className="foodImage"/>
            <div class="container">
                <h4><b>Food Name</b></h4>
                <div className="bottomCard">
                    <p className="inner">$$$$</p>
                    <button className="foodBtn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}