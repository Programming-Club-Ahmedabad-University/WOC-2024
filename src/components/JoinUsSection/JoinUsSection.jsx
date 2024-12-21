import React from "react";
import styles from "./JoinUsSection.module.css";

const JoinUsSection = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Your Email Address"
        className={styles.input}
      />
      <button type="submit" className={styles.joinButton}>
        JOIN US
      </button>
    </div>
  );
};

export default JoinUsSection;
