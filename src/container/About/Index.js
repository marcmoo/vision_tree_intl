import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import AboutComponent from '../../component/About/Index';
import Data from '../../data.json';
const click = (event) => {
    event.preventDefault();
}
class About extends Component {
    render() {
        return (
            <Fragment>
            {/* <!-- ===== Icon__box ===== -->                                             */}
                <section id="about" className="about-area  p-top-110 p-bottom-120">
                    <div className="container">
                        <div className="row">
                        {
                            Data[0].about.map((item, key) => {
                                return <AboutComponent key={key} img={item.imgSrc} title={item.title} content={item.content} />                        
                            })
                        }
                        </div>{/*<!-- End: row -->*/}
                    </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: section --> */}
                
                {/* <!-- ===== Branding ===== --> */}
                <section id="brand" className="brand-area">
                    <div className="container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6 col-sm-12">
                                <img src="./assets/img/About.png" alt="img" className="img-fluid wow fadeInUp" />
                            </div>
                            {/* <!-- End: col+ --> */}
                            
                            <div className="col-lg-5 offset-lg-1 col-sm-12">
                                <div className="">
                                    <div className="card border-0 wow fadeInUp
                                        slow
                                        ">
                                        <div className="card-body bg-transparent p-0">
                                            <Link to="/" onClick={click}>                                            
                                                <h2 className="card-title m-0"><span>Branding</span> & <span>Experience</span> design agency</h2>                                           
                                            </Link>
                                            <p className="card-text  p-top-40 p-bottom-30">Customers buy our products and services with guarantee. We are confident in this because in several years of development, we have established a fully functional organization with great management experience and extraordinary techniques. We provide the best supply chain for your product with our production department, development department, drawing department, technology department, finance department and logistics department. With our multi-channel business model, we provide diversified production solutions for our clients. All of these, together with our enthusiasm, creativity, and love, we would like to thrive in the animation field together with our clients.</p>
                                            <Link to="/"  onClick={click} className="btn btn-primary btn-lg  gradient">
                                                read more                                            
                                            </Link>
                                        </div>
                                    </div>
                                </div>{/*<!-- End: jumbotron -->*/}
                            </div>
                        </div>{/*<!-- End: row -->*/}
                    </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: section -->
                <!-- ===== update  Popup Video ===== --> */}
                            
                            
                <div id="popup_video" className="p-top-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbdb_content_module_contents">
                                    <div className="video-wrapper">
                                        <figure>
                                            <img src="./assets/img/video.jpg" alt="" />
                                            <figcaption>
                                            <Link to="https://www.youtube.com/watch?v=0C4fX_x_Vsg" className="video-iframe play-btn popup-youtube">                                               
                                                <span className="fas fa-play"></span>                                               
                                            </Link>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>{/*<!-- end: col+ -->*/}
                        </div>{/*<!-- end: row -->*/}
                    </div>{/*<!-- end: container -->*/}
                </div>
                {/*<!-- end: div -->*/}
                {/*<!-- ===== Card__two ===== --></div>*/}
            </Fragment>
        )
    }
}
export default About;