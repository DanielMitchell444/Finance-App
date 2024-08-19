import React from "react";
import styles from '../App.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {

 const [toggle, setToggle] = useState(false);
 const [open, setOpen] = useState(true);

 const toggleBar = (e) => {
   if(toggle === false){
    setToggle(true)
   }

   else if (toggle === true) {
    setToggle(false)
   }
 }

 return(
<>
 <div className= {styles.nav}>
    <FontAwesomeIcon 
    className= {styles.navIcon} 
    icon= {faBars} 
    onClick={toggleBar}
    />
  <h1>Expense Tracker Application</h1>
  </div>
  <div className= {styles.mobileMenu}>
 {toggle &&
 <div className= {styles.mobileContainer}>
 <ul className= {styles.toggleMenu}>
  <li className= {styles.link}>
    <NavLink to = "/" className={styles.link}>Home</NavLink>
  </li>
  <li className= {styles.link}>
    <NavLink to = "/Add" 
    className= {styles.link}
    >Add an Expense</NavLink>
  </li>
  <li className= {styles.link}>
    <NavLink 
    to = "/Update" 
    className= {styles.link}>Update your Budget</NavLink>
  </li>
  <li className= {styles.link}>
    <NavLink to = "/View" 
    className= {styles.link}>View Spending in Categories</NavLink>
  </li>
 </ul>
 </div>
}
</div>
</>
 )
}

export default Nav;