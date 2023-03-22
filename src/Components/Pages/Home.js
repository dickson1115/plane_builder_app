
import React from 'react';
import styles from './Home.module.css';
import demoVideo from "../../demo.mp4"
const Home = () => {

  return (
    <div className={styles.background_image} >
      <div className={styles.layer}>

      </div>
    </div>
    // <div className={styles.content}>
    //   <video autoPlay muted loop className={styles.myVideo}>
    //     <source src={demoVideo} type="video/mp4" />
    //     {/* <div className={styles.layer}>

    //     </div> */}
    //   </video>
    // </div>

  )
};

export default Home;