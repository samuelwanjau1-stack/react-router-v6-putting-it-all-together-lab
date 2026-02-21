import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DirectorList from "./DirectorList";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: "1", borderRight: "2px solid black" }}>
        <h2>Directors List</h2>
        <DirectorList directors={directors} />
      </div>

      <div style={{ flex: "2" }}>
        {/* ⚡ If this Outlet is missing, DirectorCard will NEVER show up ⚡ */}
        <Outlet context={{ directors, setDirectors }} />
      </div>
    </div>
  );
}

export default DirectorContainer;