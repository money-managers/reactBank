import React from 'react';
function Nav(props){
    const {setPageSelected} = props
    return(
        <header className="">
   <h1 className=" name ">
      Bank of React
  </h1>  

  <nav className=" " id="=">

   <div className=" container">
  <div className="   row ">
 
    <a  className=" navbar-nav mr-auto firstNav col-sm" href="#home" onClick={() => setPageSelected("home")}>
       Home
    </a>
    <a href="#signup"  onClick={() => setPageSelected("signup")} className="navbar-nav mr-auto contact col-sm">
        Signup
    </a>
    <a href="#login"  onClick={() => setPageSelected("login")} className="navbar-nav mr-auto contact col-sm">
      Log In
    </a>

    <a  href="#login"  onClick={() => setPageSelected("login")} className=" bottommm navbar-nav mr-auto contact col-sm">
              Log Out

    </a>
  </div>
</div>
  </nav>
        </header>
    )
}

export default Nav;