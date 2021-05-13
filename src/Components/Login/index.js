import React from 'react';

function Login(){
    return(
        <div id="login">
            <section id="contactSection">
          <h1>Login</h1>
          <form >
           
            <div>
              <label id="email">Email address:</label>
              <input type="email"  />
            </div>
            <div>
              <label id="password">password:</label>
              <input   />
            </div>
  
            <button className ="button" type="submit"> <span>Submit</span></button>
          </form>
        </section>

        </div>
    )
}

export default Login ;