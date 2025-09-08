import React from "react";
import { Link, NavLink } from "react-router";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav>
        
          <ul className="flex m-auto w-full p-9">

            <li className="m-auto">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="m-auto">
              <Link to="About">About</Link>
            </li>
          </ul>
       
      </nav>





      {/* navigation * */}


        <Outlet/>


    </div>
  );
}
