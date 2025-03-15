
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isUserSignedIn = !!localStorage.getItem('token'); 

  return (
    <nav className="bg-black border-b border-gray-800 flex justify-between items-center text-white">
      <NavLink to="/">
        <div className="logo">
          <img src={"./logo2.png"} alt="To-Let Logo" className="h-16 w-28 pl-4" /> 
          
        </div>
      </NavLink>

      <ul className="flex space-x-6 text-sm p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
        {
          isUserSignedIn && (
            <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Dashboard
            </NavLink>
          )
        }</li>
        <li>{
          isUserSignedIn && (
            <NavLink
            to="/dashboard2"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Add Crop
            </NavLink>
          )
        }</li>
        <li>{
          isUserSignedIn && (
            <NavLink
            to="/mycrops"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              My Crops
            </NavLink>
          )
        }</li>
        <li>{
          isUserSignedIn && (
            <NavLink
            to="/finance"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Finance
            </NavLink>
          )
        }</li>
        <li>{
          isUserSignedIn && (
            <NavLink
            to="/loan"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Loan Suggestion
            </NavLink>
          )
        }</li>
        <li>{
          isUserSignedIn && (
            <NavLink
            to="/expert"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Expert 
            </NavLink>
          )
        }</li>

<li>{
          isUserSignedIn && (
            <NavLink
            to="/educate"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Educate 
            </NavLink>
          )
        }</li>
        {/* <li>{
          isUserSignedIn && (
            <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
            }>
              Progress
            </NavLink>
          )
        }</li> */}
        {!isUserSignedIn ? (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black" : "hover:bg-teal-500 px-2 py-1 rounded"
              }
            >
              Login/Signin
            </NavLink>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-teal-500 px-2 py-1 rounded bg-teal-400 text-black"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

