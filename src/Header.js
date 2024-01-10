import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column
                align-items-start'>
                    <h1 className='display'> Welcome To BlackBlock Research </h1>
                    <p className='main-hero-para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                    officiis tempora recusandae voluptate quam, nisi odio officiis
                    tempora recusandae
                    </p>


                </div>
                {/* -------- main header right side --------- */}
  
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center flex-column
                align-items-center main-herosection-images'>
                    <img src='./images/n2.jpg' alt='heroimg' className='img-fluid'/>
                    

                </div>

            </div>

        </section>
    </header>
      
    </>
  );
};

export default Header
