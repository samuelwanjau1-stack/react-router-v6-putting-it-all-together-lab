import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/directors/new">Add Director</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;