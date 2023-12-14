import React from 'react';
import * as Icnos from 'react-icons/vsc';
import { NavLink, useLocation } from 'react-router-dom';

const SideLinks = (props) => {
    const { link } = props; // Destructure the link prop
    const Icon = Icnos[link.icon];
    const location = useLocation();

    // const matchRoute = (route) => {
    //     console.log(location.pathname, route);
    //     return matchRoute({ path: route }, location.pathname);
    //     // return false
    // }

    const matchRoute = (route) => {
        // console.log(location.pathname, route); // Changed route to route.path
        return location.pathname === route; // Compare location.pathname to route.path
    }


    return (

        <NavLink to={link.path}
            className={`relative  text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-500" : "bg-opacity-0"}  flex pl-10 `}
        >
            <span className={`absolute left-0 top-0 h-full w-[0.2rem] border-2 border-r-yellow-200 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>

            <div className=' flex gap-3 py-1 items-center'>
                <Icon />
                <p>{link.name}</p>
            </div>
        </NavLink>
    )
}

export default SideLinks;
