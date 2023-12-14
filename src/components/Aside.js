import React from "react";
import DisplayCard from "./DisplayCard";
import "../Styles/aside.css";

export default function Aside() {
  return (
    <div className="block">
      <div className="tite">
        <h1 style={{ color: "#122C50" }}>Courses we offer</h1>
      </div>
      <div className="cards">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
}
