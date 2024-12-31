import React from "react";
import PropTypes from "prop-types";
import styles from "./InformationBox.module.css";

const InformationBox = ({ title, imagePath, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={imagePath} alt={`${title} icon`} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

InformationBox.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InformationBox;
