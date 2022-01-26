import React from "react"

export default function SideMenu () {
    return(
    <div className="sideMenu"> 
        <div className="d-flex align-items-start ">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        
        <button className="nav-link active"  data-bs-toggle="pill" aria-current="true">Soup</button>
        <button className="nav-link" data-bs-toggle="pill">Salad</button>
        <button className="nav-link"  data-bs-toggle="pill">Appetizers</button>
        <button className="nav-link"  data-bs-toggle="pill">Cold Dish</button>
        <button className="nav-link"  data-bs-toggle="pill">A La Carte Sush and Sushimi</button>
        <button className="nav-link" data-bs-toggle="pill">Classic Roll and Hand Roll</button>
        <button className="nav-link" data-bs-toggle="pill">Special Rolls</button>
        <button className="nav-link" data-bs-toggle="pill">Sushi Entrees</button>
        <button className="nav-link" data-bs-toggle="pill">Kitchen Entrees</button>
        <button className="nav-link" data-bs-toggle="pill">Tempura</button>
        <button className="nav-link" data-bs-toggle="pill">Teriyaki</button>
        <button className="nav-link" data-bs-toggle="pill">Hot Noodles</button>
        <button className="nav-link" data-bs-toggle="pill">Fried Rice</button>
        <button className="nav-link" data-bs-toggle="pill">Pad Thai</button>
        <button className="nav-link" data-bs-toggle="pill">Dinner Box</button>
        <button className="nav-link" data-bs-toggle="pill">Hibachi Entrees</button>
        <button className="nav-link" data-bs-toggle="pill">Hibachi Combination</button>
        <button className="nav-link" data-bs-toggle="pill">Kid's menu</button>
        <button className="nav-link" data-bs-toggle="pill">Mizu Party Platter</button>
        <button className="nav-link" data-bs-toggle="pill">Beverages</button>
        <button className="nav-link" data-bs-toggle="pill">Sauces</button>
        </div>
        </div>
        </div>
    )
}

