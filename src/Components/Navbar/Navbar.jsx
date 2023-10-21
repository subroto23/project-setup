import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, loading, handleLogOut } = useContext(AuthContext);
  console.log(user);
  const navLink = (
    <>
      <NavLink className="mx-5 btn btn-ghost normal-case" to="">
        Home
      </NavLink>
      <NavLink className="mx-5 btn btn-ghost normal-case" to="/catagory-form">
        Add Catagory
      </NavLink>
      <NavLink className="mx-5 btn btn-ghost normal-case" to="/slider-form">
        Add Slides
      </NavLink>
      <NavLink to="/add-products" className="mx-5 btn btn-ghost normal-case">
        Add Products
      </NavLink>
      <NavLink to="/registation" className="mx-5 btn btn-ghost normal-case">
        Registation
      </NavLink>
    </>
  );
  return (
    <>
      <div className="bg-green-500 text-white">
        <div className=" navbar flex justify-between items-center max-w-6xl mx-auto">
          {/* Nav Logo */}
          <div>
            <div className="dropdown ">
              <div>
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-green-500 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <NavLink to="/" className=" btn btn-ghost normal-case">
              <img
                className="h-6 w-6"
                src="https://i.ibb.co/kg6zdzt/png-clipart-computer-icons-farm-garden-logo-farming-technology-food-leaf.png"
                alt=""
              />
              BrandNew
            </NavLink>
          </div>

          {/* NavLink */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>

          {/* Cart */}
          <div className="indicator">
            <button>
              <Link to="cart">
                <BsCart2 className="w-6 h-6 cursor-pointer" />
              </Link>
            </button>
          </div>
          {/* Profile */}

          {loading ? null : user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-lg w-52 bg-green-500"
                >
                  <li>
                    <button>
                      <Link>{user.displayName}</Link>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLogOut()}>
                      <Link>Logout</Link>
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              {" "}
              <NavLink to="/login" className="mx-5 btn btn-ghost normal-case">
                Log in
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
