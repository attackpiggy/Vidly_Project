import React, { Component } from 'react'



class NavBar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
        Navbar <span className="badge-pill badge-sco">{this.props.totalCoounters}</span>
            </nav>



         );
    }
}
 
export default NavBar;