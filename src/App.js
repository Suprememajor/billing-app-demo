import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/molecules/sidebar/Sidebar";
import Billing from "./components/blocks/biiling/Billing";
import styles from "./app.module.css";

function App() {
  return (
    <Router>
      <div className="App">
        <section className={styles.section}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Billing />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
