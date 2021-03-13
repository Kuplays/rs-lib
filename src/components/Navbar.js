import React from "react";
import { Link } from 'react-router-dom';
import logo from "../rstyle-logo.jpg";

const Navbar = (props) => {
    const logout = () => {
        props.setToken(null);
        sessionStorage.clear();
    }

    return (
        <nav className='navbar navbar-expand-lg sticky-top navbar-dark' style={{ backgroundColor: "#5675db" }}>
            <a className='navbar-brand' href='#'>
                <img src={logo} width='50' height='50' alt='react logo' className="shadow-lg mr-2" />
            RSTYLE-Lib
          </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to='/'>
                        <span className="nav-item nav-link">Home</span>
                    </Link>

                    <Link to='/user'>
                        <span className="nav-item nav-link">User</span>
                    </Link>

                    <Link to='/library'>
                        <span className="nav-item nav-link">Library</span>
                    </Link>

                    {props.tokenState ?
                        <Link to='/' onClick={() => logout()}>
                            <span className="nav-item nav-link">Logout</span>
                        </Link> : 
                        null
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;