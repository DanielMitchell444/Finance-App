import React from "react";
import styles from '../App.module.css'
const Home = () => {
 return (
 <div className= {styles.container}>
  <div className= {styles.header}>
    <h1>Your Balance is $0</h1>
  </div>
  <div className= {styles.boxContainer}>
  <div className= {styles.boxes}>
   <div className= {styles.box1}>
    <h1>Income</h1>
    <h1>$0</h1>
   </div>
   </div>
   <div className= {styles.box2}>
    <h1>Expenses</h1>
    <h1>$0</h1>
    </div>
   </div>
   </div>
 )
}

export default Home