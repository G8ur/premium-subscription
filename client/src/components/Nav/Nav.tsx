import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { useContext } from "react";


const Nav = () => {

  return (
    <Navbar>
      <NavItem>
        <NavLink>Home</NavLink>
      </NavItem>
    </Navbar>
  );
};

export default Nav;