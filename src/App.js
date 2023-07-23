import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
function App() {
  const [data , setData] = useState(0);

    function getQuote(){
      try{
      fetch('https://api.quotable.io/random').then(response => response.json()).then(
        (quote)=>{
          setData(quote);
        }
      )
    }
    catch{
      alert("Error");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
          </style>
        <h1 className='Heading'>Random Quote Generator</h1> 
        <h3 className='Quote'>Quote: {data.content}</h3>
        <h3 className='Author'>Author: {data.author}</h3>
        <br></br>
        <button onClick={getQuote} className='Generator'>Get Quote</button>

      </header>
    </div>
  );
}

export default App;
