import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar({dogs}) {
  const links = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} > {/* Creates Navlink or each dog passed in with dogs prop */}
      {dog.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/dogs">Home</NavLink>
      {links}
    </nav>
  );
}

export default NavBar;