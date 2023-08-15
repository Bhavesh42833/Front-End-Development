
import './App.css';
import React, {useState, useEffect } from 'react';
import axios from "axios";
function App() {
  const [data , setData] = useState([]);
  const[Author, setAuthor] = useState();
  const[Quote, setQuote] = useState();
 
  useEffect(() =>{
    axios.get("https://random-quote-generator-u26y.onrender.com")
    .then((res) => setData(res.data))
  },[]);

  const HandleSubmit = async () => {
    try{
      axios.post("https://random-quote-generator-u26y.onrender.com",{
        "quote": Quote,
        "author":Author 
      }
      )
    }
    catch{
      alert("Error");
    }
    window.location.reload(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        </style>
        <h1 className='Heading'>Random Quote Generator</h1>
        <h3 className='Quote'>Quote:{data.map((item) => (<div>{item.quote}</div>))}</h3>
        <h3 className='Author'>Author:{data.map((item) => (<div>{item.author}</div>))}</h3>
        <br></br>
        <h2>Contribute to the Quotes Magzine!</h2>
        <div>
          <label>Quote :</label>
          <input onChange={(e) => (setQuote(e.target.value))}/>
       </div>
       <div>
          <label>Author :</label>
          <input onChange={(e) => (setAuthor(e.target.value))}/>
       </div>      
        <button className='Generator' onClick={HandleSubmit}>Submit</button>

      </header>
    </div>
  );
}

export default App;
