import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/picture 4.jpg";



const common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                 <div className="row">
                     <div className="col-11 mx-auto">
                         <div className="row">
                         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                             <h1>
                                 {props.name}
                             <b>  </b> <strong className='brand-name'>Bizz Communication </strong>
                             </h1>
                             <h3 className="my-3">
                                 We're the team of talented developers for making websites
                             </h3>
                             <div className="mt-3">
                                  {/* <a href="" className="btn-get-started ">
                                      Get Started
                                      </a> */}

 <NavLink to={props.visit} className="btn btn-primary">{props.btname} </NavLink> 
                                      
                             </div>
                         </div>
                         <br /><br /><br />
                         <div className="col-lg-6 order-lg-2 header-img">
                             <img src={web} className="img-fluid animated" alt="home page" />
                         </div>
                         
                     </div>
                     </div>
                   </div>
             </div>
        </section>
        <br /><br />
        </>
    );
};

export default common;