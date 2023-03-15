// @ts-nocheck


import React from "react";
import styles from "./Header.module.css";
import Toggle from "./Toggle";


const Header = () => {
  return (
    <header className={styles.header}>
      <h1>DEVCOVER</h1>
      <Toggle/>
    </header>
  );
};

export default Header;
