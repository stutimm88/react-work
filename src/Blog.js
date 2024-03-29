import React, { useState } from 'react';
import blogapi from "./API/blogApi";

const Blog = () => {
    const [serviceData, setServiceData] = useState(blogapi);
  return (
    <>
    <section className='service-main-container'>
        <div className='container service-container'>
            <h1 className='main-heading text-center fw-bold'> Blogs</h1>
            <div className='row'>
                {serviceData.map((curElem) => {
                    const {id, logo, title, info} = curElem;
                    return(
                    <>
                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className='sub-heading'>{title}</h2>
                    <p> {info} </p>
                    </div>
                    </>
                    );
                })}
            
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog
