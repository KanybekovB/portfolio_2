import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <b>J-Shop</b>
        </NavLink>
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
          <a href="#">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22.5L20 20.5"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.5H3.74001C4.82001 2.5 5.67 3.43 5.58 4.5L4.75 14.46C4.61 16.09 5.89999 17.49 7.53999 17.49H18.19C19.63 17.49 20.89 16.31 21 14.88L21.54 7.38C21.66 5.72 20.4 4.37 18.73 4.37H5.82001"
                stroke="#292D32"
                strokeWidth={1.5} // Здесь исправлено на использование фигурных скобок
                strokeMiterlimit={10} // Здесь тоже исправлено
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.25 22.5C16.9404 22.5 17.5 21.9404 17.5 21.25C17.5 20.5596 16.9404 20 16.25 20C15.5596 20 15 20.5596 15 21.25C15 21.9404 15.5596 22.5 16.25 22.5Z"
                stroke="#292D32"
                strokeWidth={1.5} // Здесь исправлено
                strokeMiterlimit={10} // Здесь тоже исправлено
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 22.5C8.94036 22.5 9.5 21.9404 9.5 21.25C9.5 20.5596 8.94036 20 8.25 20C7.55964 20 7 20.5596 7 21.25C7 21.9404 7.55964 22.5 8.25 22.5Z"
                stroke="#292D32"
                strokeWidth={1.5} // Здесь исправлено
                strokeMiterlimit={10} // Здесь тоже исправлено
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.5H21"
                stroke="#292D32"
                strokeWidth={1.5} // Здесь исправлено
                strokeMiterlimit={10} // Здесь тоже исправлено
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5H21"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 10H21"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 15H21"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 20H21"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};
