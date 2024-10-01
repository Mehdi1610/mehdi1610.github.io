import React from "react";
import '../../vendor/icofont/fonts/icofont.min.css'
import './styleBurger.css';

function Burger(){

    return(
        <button type="button" className="mobile-nav-toggle">
            <i className="icofont-navigation-menu"></i>
        </button>
    )
}

export default Burger;