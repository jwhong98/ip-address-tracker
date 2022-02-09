import React from "react";
import classes from "./InfoDisplay.module.css";
import InfoItem from "./InfoItem";

const InfoDisplay = (props) => {
  return (
    <div className={classes.display}>
      <ul className={classes.displayMenu}>
        <InfoItem title="ip address" content="192.212.175.101" />
        <InfoItem title="location" content="Brooklyn, NY 10001" />
        <InfoItem title="timezone" content="UTC -05:00" />
        <InfoItem title="isp" content="SpaceX Starlink" />
      </ul>
    </div>
  );
};

export default InfoDisplay;
