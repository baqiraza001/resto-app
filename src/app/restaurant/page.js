'use client';

import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="container">
            <h1>Restaurant Register/Login</h1>
            {
                login ? <RestaurantLogin /> : <RestaurantSignup />
            }
            <button className="button-link" onClick={() => setLogin(!login)}>
                {login ? "Do not have account? SignUp" : "Already have account? Login"}
            </button>
        </div>
    );
}

export default Restaurant;