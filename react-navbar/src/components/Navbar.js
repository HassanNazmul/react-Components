import React, {Component} from 'react';
import './Navbar.css'
import {MenuItem} from "./Menu-Item";


class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">
                        <h2>REACT NAVBAR</h2>
                    </div>
                    <ul className="navbar-nav ms-lg-auto">
                        {MenuItem.map((item) => {
                            return (
                                <li className="nav-item">
                                    <a href={item.url} className="nav-link">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;