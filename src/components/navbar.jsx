import React, { Component } from 'react'

//functional component

const NavBar=()=>{

    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
    Navbar{" "} 
    
    <span className="badge badge-pill badge-scondary">{this.props.totalCounters}</span>
        </a>
        </nav>
    
    
     );
    }







class NavBar extends Component {
    
    render() { 
}
}
 
export default NavBar;