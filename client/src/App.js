import React,{useState} from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Signup from './Components/SignUp'
import SideNav from './Components/SideNav';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';



const client = new ApolloClient({

  request: operation => {
    const token = localStorage.getItem('id_token');

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
  },
    uri: '/graphql'
  });
  



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
    <ApolloProvider client={client}>
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
   </ApolloProvider>
  );
}

export default App;
