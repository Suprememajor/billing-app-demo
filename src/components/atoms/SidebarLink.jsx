import React from "react";
import styles from "./sidebarLink.module.css";
const SidebarLink = ({ icon, text }) => {
  return (
    <div className={styles.section}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SidebarLink;
