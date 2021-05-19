import React, { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Signup from './Components/SignUp'
import SideNav from './Components/SideNav';



function App() {
  const [categories] = useState([
    {
      },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [pageSelected, setPageSelected] = useState("home");

  return (
    <div className="App">
      <header>

        <Nav></Nav>
        <SideNav id="sideNav"
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        ></SideNav>
      </header>

      {pageSelected === "home" ? (
        <HomePage></HomePage>
      ) : (<></>)
      }
      {pageSelected === "signup" ? (
        <Signup></Signup>
      ) : (
          <>
          </>)
      }
      {pageSelected === "login" ? (
        <Login></Login>
      ) : (
          <>
          </>)
      }

    </div>
  );
}

export default App;
