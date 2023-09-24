import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">J-Shop</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div>
          <span>i</span>
          <span>i</span>
          <span>i</span>
        </div>
      </nav>
    </header>
  );
};
