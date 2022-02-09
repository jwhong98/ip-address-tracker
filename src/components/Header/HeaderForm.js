import React from "react";
import classes from "./HeaderForm.module.css";
import arrow from "../../images/icon-arrow.svg";

const HeaderForm = () => {
  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        placeholder="Search for any IP address or domain"
      />
      <button>
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
};

export default HeaderForm;
