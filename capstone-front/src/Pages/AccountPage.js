import React from "react"
import { useState } from "react"

export default function AccountPage(){

    let [isRegistered, setIsRegistered] = useState(true)

    function registerUser() {
        setIsRegistered(false)
        document.getElementById("showRegister").style.display="inline";
    }

    function signIn() {
        if(!isRegistered){
            ///
        }
    }

    return(
        <div className="form">
            <div className = "formContainer">
                <div id = "showRegister" style={{display: "none"}}>
                <label>Name</label>
                <input placeholder="Name" className="inputBox"></input>
                </div>
                <label>Email</label>
                <input placeholder="Email" className="inputBox"></input>
                <label>Password</label>
                <input placeholder="Password" className="inputBox"></input>
                <button class="btn btn-warning" onClick={signIn}>{isRegistered ? "Sign In" : "Register"}</button>
                <a className="registerHere" onClick={registerUser}>Don't have an account? Click here to Register</a>
            </div>
        </div>
    )
}