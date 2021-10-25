import React from 'react';
import tab from "../src/images/slide 1.jpg"
import app from "../src/images/slide 2.jpg"
import eye from "../src/images/slide 3.jpg"
import website from "../src/images/slide 4.jpg"
import ecommerce from "../src/images/slide 5.jpg"
import application from "../src/images/slide 6.jpg"


const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            <div className="col-md-10 col-12 mx-auto">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={tab} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Simple Website</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={app} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">E-commerce Website</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={eye} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Mobile Application</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
<br />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={website} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">E-commerce Website</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ecommerce} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Mobile Application</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={application} class="card-img-top" height="220px" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Website</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;