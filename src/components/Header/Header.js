import React from "react";
import classes from "./Header.module.css";
import HeaderForm from "./HeaderForm";

const Header = () => {
  return (
    <section className={classes.header}>
      <h2>IP Address Tracker</h2>
      <HeaderForm />
    </section>
  );
};

export default Header;
