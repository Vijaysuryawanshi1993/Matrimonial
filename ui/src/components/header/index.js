import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse-blue navbar">
                <div className="navbar-inner">
                    <div className="container">
                        <div className="navigation">
                            <nav id="colorNav">
                                <ul>
                                    <li className="green">
                                        <Link to="/" className="icon-home"></Link>
                                        <ul>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/register">Register</Link></li>
                                            <li><Link to="/">Logout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <a className="brand" href="index.html"><img src="images/logo.png" alt="logo"/></a> */}
                        <div className="pull-right">
                            <nav className="navbar nav_bottom" role="navigation">

                                <div className="navbar-header nav_2">
                                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">Menu
		                                <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    {/* <a className="navbar-brand" href="#"></a> */}
                                </div>

                                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                    <ul className="nav navbar-nav nav_1">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li className="dropdown">
                                            <Link to="/matches" className="dropdown-toggle" data-toggle="dropdown">Matches<span className="caret"></span></Link>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><Link to="/matches">New Matches</Link></li>
                                                <li><Link to="/matches">Who Viewed my Profile</Link></li>
                                                <li><Link to="/matches">Viewed & not Contacted</Link></li>
                                                <li><Link to="/matches">Premium Members</Link></li>
                                                <li><Link to="/matches">Shortlisted Profile</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/search" className="dropdown-toggle" data-toggle="dropdown">Search<span className="caret"></span></Link>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><Link to="/search">Regular Search</Link></li>
                                                <li><Link to="/search">Recently Viewed Profiles</Link></li>
                                                <li><Link to="/search">Search By Profile ID</Link></li>
                                                <li><Link to="/search">Faq</Link></li>
                                                <li><Link to="/search">Shortcodes</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/message" className="dropdown-toggle" data-toggle="dropdown">Messages<span className="caret"></span></Link>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><Link to="/message">Inbox</Link></li>
                                                <li><Link to="/message">New</Link></li>
                                                <li><Link to="/message">Accepted</Link></li>
                                                <li><Link to="/message">Sent</Link></li>
                                                <li><Link to="/message">Upgrade</Link></li>
                                            </ul>
                                        </li>
                                        <li className="last"><Link to="/contact">Contacts</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
