import styles from "./post.module.css";


export default function PostCard({title, description}) {
  return (
    <div className={styles.cardContainer}>
     <div className={styles.headTitle}>{title}</div> 
     <div>{description}</div>
    </div>
  );
}