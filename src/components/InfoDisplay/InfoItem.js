import React from "react";
import classes from "./InfoItem.module.css";

const InfoItem = (props) => {
  return (
    <li className={classes.item}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.content}>{props.content}</p>
    </li>
  );
};

export default InfoItem;
