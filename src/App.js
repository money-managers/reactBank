import React,{useState} from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Signup from './Components/SignUp'

function App() {
  const [categories] = useState([
    {
      // name: 'Grocery aisle',
      // category: 'work',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  
  ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [pageSelected, setPageSelected] = useState("home");
  
  return (
    <div className="App">
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        ></Nav>
 {pageSelected === "home" ? (
      <HomePage></HomePage>
  ) : (<></>    )
  }
{pageSelected === "signup" ? (
      <Signup></Signup>
  ) : (
<>
</>    )
  }
  {pageSelected === "login" ? (
      <Login></Login>
  ) : (
<>
</>    )
  }
   </div>
  );
}

export default App;