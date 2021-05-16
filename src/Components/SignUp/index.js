import React from 'react';

function SignUp(){
    return(
        <div id="signup">
  <section >
          <h1>Sign up</h1>
          <form >
          <div>
              <label id="name">Name:</label>
              <input   />
            </div>
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

export default SignUp;