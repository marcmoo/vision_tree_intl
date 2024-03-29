import {Link} from "react-router-dom";
import React, {Fragment, lazy, Suspense} from 'react';

const VideoOrImg = lazy(() => import('./LazyComponent'))
export const MainBanner = () => {
          return (
              <Fragment>          
                {/* <!-- Banner Area Starts --> */}
                <section id="banner-area" className="banner-area">
                <div className="banner-overlay">
                    <Suspense fallback={<div>Fallback Component</div>}>
                        <VideoOrImg />
                    </Suspense>
                </div>
                {/* <!-- End: banner-overlay --> */}
                <div className="container d-flex h-100 align-items-center">
                    <div className=" header-content wow zoomIn slow">
                    <h4 className="text-white">Creative Studio</h4>
                        <h3 className="text-white m-top-20 m-bottom-35">Best Animation Partner</h3>
                        <p className="text-white m-bottom-40">Animation is Beauty, We Promise With Our Masterpieces.</p>                    
                        <Link to='#' className="btn btn-primary btn-lg  gradient">contact us </Link>
                    </div>{/*<!-- End: header-content -->*/}
                </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: Banner Area  --></div> */}
            </Fragment>
        );
    }


    export const BlogBanner = () => {           
        return (
            <Fragment>          
                 {/* <!-- Start intro-area --> */}
                <section className="blog-grid-one blog-page intro-area d-flex align-items-center" id="home">
                    <img src="./assets/img/hero-gardient.png" className="img-fluid one" alt="img" />
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-12">
                                <div className="breadcrumb_wrapper d-flex flex-column align-items-center">
                                    <h4 className="page_title m-top-130 m-bottom-20">Blog Grid One</h4>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Grid One</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                    {/* <!-- ends: .intro-area --> */}
          </Fragment>
      );
  }