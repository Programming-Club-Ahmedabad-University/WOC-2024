import React from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.welcomeText}>Welcome !!</p>
      <p className={styles.clubName}>Programming Club</p>
      <p className={styles.text}>Ahmedabad University</p>
      <p className={styles.clubDescription}>
        Unleashing creativity through the power of code. Join us to learn,
        explore, and build innovative solutions, sharpen your skills, and
        connect with like-minded enthusiasts in a vibrant tech community.
      </p>
    </div>
  );
};

export default WelcomeSection;
