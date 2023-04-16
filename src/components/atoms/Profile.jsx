import React from "react";
import styles from "./profile.module.css";

const Profile = ({imgLink, username, handle}) => {
  return (
    <div className={styles.profile}>
      <img className={styles.image} src={imgLink} alt="" />
      <div className={styles.text_div}>
        <p className={styles.username}>{username}</p>
        <p className={styles.handle}>{handle}</p>
      </div>
    </div>
  );
};

export default Profile;
