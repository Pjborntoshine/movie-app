import React from "react";
import styles from "./navbar.module.css"
//import "./index.css"; // Import your custom CSS file

function Navbar(props){
  
    const {cartCount}=props
    return (
      <div className={styles.container}>
        <div className={styles.logo}>Movie-App</div>
        <div className={styles.name}>Created by PJborntoshine</div>
        <div>
          <img className={styles.icon} alt="Crt Icon" src="https://cdn-icons-png.flaticon.com/128/1121/1121895.png" />
          <span className={styles.count}>{cartCount}</span>
        </div>
      </div>
    );
  
}

export default Navbar;
