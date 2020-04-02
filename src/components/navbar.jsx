import React, { Component } from 'react'

//functional component

const NavBar=( props)=>{

    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
    Navbar{" "} 
    
    <span className="badge badge-pill badge-scondary">{props.totalCounters}</span>
        </a>
        </nav>
    
    
     );
    }





 
export default NavBar;