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
                    <p className="d-flex flex-row align-items-center"><Link to="#"><img src="./assets/img/footer-logo.svg" alt="logo" height='30px' /></Link><div className='ml-2' style={{fontSize: 24, color: '#ff458a' }}>Vision Tree</div></p>
                    <p className="copyright mr-auto mt-2">&copy; 2020. All Rights Reserved. Created by <Link to="/" target="_blank">
                        Vision Tree</Link></p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div style={{display: 'flex', justifyContent: 'center', fontSize: 12, flex: 1}}>
                    <ul className="list-group">
                        <li className="list-inline-item">
                        Telephone: (+86) 800-888-8888
                        </li>
                        <li className="list-inline-item">
                        e-mail: xinyuhuo@visiontree.com
                        </li>
                        <li className="list-inline-item">
                        Address: 888 High Tech Ave STE 888, Hunnan District, Shenyang, LN China 110000.
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