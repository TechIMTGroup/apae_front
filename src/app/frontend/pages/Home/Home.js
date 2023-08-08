import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        This is the home page. You can edit it by editing{" "}
        <code>src\app\pages\Home\Home.js</code>.
      </p>
      <Link to="/about">About</Link>
    </div>
  );
}