import React from 'react';

function SideNav(props){

    const {setPageSelected} = props
    

    function openNav() {
        document.getElementById("mySidenav").setAttribute("style", " width:250px;");
      }
      
      function closeNav() {
        document.getElementById("mySidenav").setAttribute("style", " width:0;");
      }
      
    return (
        <div id="sideNav">
       <div id="mySidenav" className="sidenav">
  <a href="#home" className="closebtn" onClick={() => closeNav()}>&times;</a>

  <a   href="#home" onClick={() => setPageSelected("home")}>
       Home
    </a>
    <a href="#signup"  onClick={() => setPageSelected("signup")} >
        Signup
    </a>
    <a href="#login"  onClick={() => setPageSelected("login")} >
      Log In
    </a>

    <a  href="#login"  onClick={() => setPageSelected("login")} >
              Log Out

    </a>

</div>
<span className="openNav" onClick={() => openNav()}>&#9776; Menu </span>
</div>
    )
}

export default SideNav;