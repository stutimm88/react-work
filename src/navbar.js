import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);
  return ( 
     <>
     <section className='navbar-bg'>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#">BlackBlock Research</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" 
    aria-expanded="false" aria-label="Toggle navigation">
        onClick={() => setShow(!show)}
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
    
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-style" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
};

export default Navbar;
