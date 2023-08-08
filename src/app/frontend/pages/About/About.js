import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        This is the about page. You can edit it by editing{" "}
        <code>src\app\pages\About\About.js</code>.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
}