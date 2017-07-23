import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';


export const Header = (props) => {
        return(
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </div>


        );

};


export default Header;
