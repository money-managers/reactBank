import React from 'react';
import Chart from "chart.js"
import { populateTable,populateTotal,sendTransaction} from '../../js/logic' 
function HomePage(){
  
  fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal();
    populateTable();
    populateChart();
  });
  
 
    return (
        <div  id="home" class="wrapper">
        <div class="total">
          <div class="total">Your total is: $<span id="total">0</span></div>
        </div>
    
        <div class="form">
          <input type="text" id="t-name" placeholder="Name of transaction" />
          <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
          <button id="add-btn" onClick={() => sendTransaction(true)}><i class="fa fa-plus buttons" ></i> Add Funds</button>
          <button id="sub-btn" onClick={() => sendTransaction(false)}><i class="fa fa-minus"></i> Subtract Funds</button>
          <p class="error"></p>
        </div>
    
        <div class="transactions">
          <table>
            <thead>
              <th>Transaction</th>
              <th>Amount</th>
            </thead>
            <tbody id="tbody">
              
            </tbody>
          </table>
        </div>
        
        <canvas id="myChart"></canvas>
      </div>
    )
}

export default HomePage;