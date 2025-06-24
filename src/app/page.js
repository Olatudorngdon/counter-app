'use client';
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import PostCard from "./components/postCard/postCard";






export default function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json(); // Parse JSON here
    setData(json); // Set the parsed data
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);

console.log('data', data);
if (loading) {
  return <div className={styles.loadingData}>Loading...</div>;
}




  return (
    <div className={`${styles.page} ${styles.fixedContainer}`}>
      
   <div className={styles.counterApp}> facebook
   <p className={styles.counterCaption}>Welcome to our facebook Pages</p>
   </div>

   <div className={styles.wrapper}>
    {
      data && data.length > 0 && data.map((post) => (
        <PostCard 
          key={post.id} 
          title={post.title} 
          description={post.body} 
        />
      ))
    }
  <PostCard title={'I love jav'} description={'It is the best app for you'} />
  
   </div>
   
    </div>
  );
}
