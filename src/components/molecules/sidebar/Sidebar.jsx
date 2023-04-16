import React from "react";
import styles from "./sidebar.module.css";
import Profile from "../../atoms/Profile";
import SidebarLink from "../../atoms/SidebarLink";
import data from "../../../data/sidebarData";
import Logout from "../../../icons/LogoutIcon";

const Sidebar = () => {
  return (
    <section className={styles.section}>
      <div>
        <Profile imgLink="" username="Ildiko Gaspar" handle="@igaspar" />
        <div className={styles.linkDiv}>
          {data.map((item, idx) => (
            <SidebarLink key={idx} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
      <button className={styles.btn}>
        <Logout />
        <p>Log out</p>
      </button>
    </section>
  );
};

export default Sidebar;
