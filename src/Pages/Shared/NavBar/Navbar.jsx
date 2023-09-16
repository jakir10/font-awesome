import { Link } from "react-router-dom";

const Navbar = () => {
  const NavOption = (
    <>
      <li>
        <Link to="/">start</Link>
      </li>
      <li>
        <Link className="mt-1" to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </Link>
      </li>
      <li>
        <a>Icons</a>
      </li>
      <li>
        <a>Docs</a>
      </li>
      <li>
        <a>Plans</a>
      </li>
      <li>
        <a>Support</a>
      </li>
      <li>
        <a>Podcast</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* for responsive view */}
            {NavOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Font Awesome</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* for web view */}
        <ul className="menu menu-horizontal px-1">{NavOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
