'use client';
import styles from "./page.module.css";
import Button from "./components/button";
import React from "react";




export default function Home() {


  const [count, setCount] = React.useState(0);


  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }


  return (
    <div className={styles.page}>
      
   <div className={styles.counterApp}> COUNTER APP
   <p className={styles.counterCaption}>Use this counter to learn numbers</p>
   </div>
   


   <div className={styles.counterContainer}>
   <Button
   title={"Increase"}
    onclick ={increaseCount}
   
   />
   <Button
    title={"Decrease"}
    onclick ={decreaseCount}
   />
   </div>


   <div className={styles.counterNum}> Count: {count}</div>
    </div>
  );
}
