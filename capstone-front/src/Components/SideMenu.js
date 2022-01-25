import React from "react"

export default function SideMenu () {
    return(
    <div className="sideMenu"> 
        <div class="d-flex align-items-start ">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        
        <button class="nav-link active"  data-bs-toggle="pill" aria-current="true">Soup</button>
        <button class="nav-link" data-bs-toggle="pill">Salad</button>
        <button class="nav-link"  data-bs-toggle="pill">Appetizers</button>
        <button class="nav-link"  data-bs-toggle="pill">Cold Dish</button>
        <button class="nav-link"  data-bs-toggle="pill">A La Carte Sush and Sushimi</button>
        <button class="nav-link" data-bs-toggle="pill">Classic Roll and Hand Roll</button>
        <button class="nav-link" data-bs-toggle="pill">Special Rolls</button>
        <button class="nav-link" data-bs-toggle="pill">Sushi Entrees</button>
        <button class="nav-link" data-bs-toggle="pill">Kitchen Entrees</button>
        <button class="nav-link" data-bs-toggle="pill">Tempura</button>
        <button class="nav-link" data-bs-toggle="pill">Teriyaki</button>
        <button class="nav-link" data-bs-toggle="pill">Hot Noodles</button>
        <button class="nav-link" data-bs-toggle="pill">Fried Rice</button>
        <button class="nav-link" data-bs-toggle="pill">Pad Thai</button>
        <button class="nav-link" data-bs-toggle="pill">Dinner Box</button>
        <button class="nav-link" data-bs-toggle="pill">Hibachi Entrees</button>
        <button class="nav-link" data-bs-toggle="pill">Hibachi Combination</button>
        <button class="nav-link" data-bs-toggle="pill">Kid's menu</button>
        <button class="nav-link" data-bs-toggle="pill">Mizu Party Platter</button>
        <button class="nav-link" data-bs-toggle="pill">Beverages</button>
        <button class="nav-link" data-bs-toggle="pill">Sauces</button>
        </div>
        </div>
        </div>
    )
}