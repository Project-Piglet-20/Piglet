import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            {/* Add 'to' after making nav page */}
            { window.innerWidth > 800 ? <Link style= {{fontSize: '30px'}}> {'\xa0\xa0\xa0'} PIGLET </Link> : <Link> <i className= "medium material-icons left">dehaze</i> </Link> } 
            <ul className="right teal darken-2">
                <li> <Link to="/home"> Home <i className= "material-icons left">home</i> </Link> </li>
                <li> <Link to="/about"> About <i className= "material-icons left">contact_page</i> </Link> </li>
                <li> <Link to="/"> Report <i className= "material-icons left">description</i> </Link> </li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);