import React from "react";
import styles from '../App.module.css'

const Add = ({open, ready}) => {
 return(
 <div className = {styles.addContainer}>
    <h1>Add an Expense</h1>
    <button onClick={() => open()}>
    Connect a bank account
  </button>

 </div>
 )
}

export default Add;