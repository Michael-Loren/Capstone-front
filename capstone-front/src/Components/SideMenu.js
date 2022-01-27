import React from "react"
import { useState } from "react"

export default function SideMenu ({allFoods}) {

    const [categories, setCategories] = useState([])

    console.log(allFoods)
    
    allFoods.map(index => {
        if(!categories.includes(index.f_category)){
            categories.push(index.f_category)
        }}
    )

    return(
    <div className="sideMenu"> 
            <div class="d-flex align-items-start ">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            
            {categories.map(index =>{
             return(
                <button class="nav-link" data-bs-toggle="pill">{index}</button>
        )})} 
        </div>
        </div> 
    </div>
    )
}
