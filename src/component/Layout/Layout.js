import React from 'react';
import { Fragment } from 'react';
import Footer from './Footer/Footer';
import Preloader from './Preloder';
// todo: do we really need Preloader? it slows loading...
//Initialize Preloader
function layout (props) {
    return (
        <Fragment>
            {/* <Preloader /> */}
            {props.children}
            <Footer/>
        </Fragment>
    );
  }  
  export default layout;