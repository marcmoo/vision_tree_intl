import { Fragment } from 'react';
import {Link} from "react-router-dom";
import React from 'react';
import $ from 'jquery';
function Footer () {
    
    $('body').on('click', '.scroll_top', function () {        
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    return(
        <Fragment>        
            {/* <!-- ===== Footer ===== --> */}            
            {/* <!-- Footer Area Starts --> */}
            <footer id="footer-area" className="footer-area p-top-40 p-bottom-40 border-top">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="social_logo">
                    <p className="pb-2"><Link to="#"><img src="./assets/img/footer-logo.png" alt="img" className="img-fluid" /></Link></p>
                    <p className="copyright mr-auto mt-2">&copy; 2019. All Rights Reserved. Created by <Link to="http://aazztech.com/" target="_blank">
                        AazzTech</Link></p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div>
                    <ul className="list-inline m-0">
                        <li className="list-inline-item">
                        <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        </li>
                        <li className="list-inline-item">
                        <Link to="#">
                            <i className="fab fa-behance"></i>
                        </Link>
                        </li>
                        <li className="list-inline-item">
                        <Link to="#">
                            <i className="fas fa-globe"></i>
                        </Link>
                        </li>
                    </ul>
                    </div>{/*<!-- end: social button -->*/}
                </div>{/*<!-- end: col+ -->*/}
                </div>{/*<!-- end: row -->*/}
            </div>{/*<!-- end: container -->*/}
            </footer>
            {/* <!-- Footer Area Ended --> */}

            {/* <!-- ===== Fixed__bottom__toggler ===== -->     */}
            <footer>
                <div className="row">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="scroll_top rounded-circle">
                                <span className=""><i className="fas fa-angle-up"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </Fragment>
    );
}
export default Footer;