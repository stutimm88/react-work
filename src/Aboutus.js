import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/g1.jpeg" alt="aboutusIMg" />
            </div>

            {/* 1 section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              
              <h1 className="main-heading ">ABOUT US</h1>

              {aboutData.map((curElem) => {
                const { info } = curElem;
                return (
                  <>
                  <div className="row our-services-info">
                      
                        <p className="main-hero-para ">{info}</p>
                  </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">

            {/* 1section right side data  */}
            
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex 
            justify-content-center align-items-start flex-column">
             
              <h1 className="main-heading text-center"> SERVICES </h1>

              {aboutData.map((curElem) => {
                const { info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" >
                      
                        <p className="main-hero-para">{info}</p>
                      
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/g2.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;