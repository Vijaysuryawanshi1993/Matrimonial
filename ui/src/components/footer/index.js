import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-4 col_2">
                        <h4>About Us</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."</p>
                    </div>
                    <div className="col-md-2 col_2">
                        <h4>Help & Support</h4>
                        <ul className="footer_links">
                            <li><Link to="/">24x7 Live help</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col_2">
                        <h4>Quick Links</h4>
                        <ul className="footer_links">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms and Conditions</Link></li>
                            <li><Link to="/service">Services</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col_2">
                        <h4>Social</h4>
                        <ul className="footer_social">
                            <li><a href="#"><i className="fa fa-facebook fa1"> </i></a></li>
                            <li><a href="#"><i className="fa fa-twitter fa1"> </i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus fa1"> </i></a></li>
                            <li><a href="#"><i className="fa fa-youtube fa1"> </i></a></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                    <div className="copy">
                        <p>Copyright © 2015 Marital . All Rights Reserved  | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
