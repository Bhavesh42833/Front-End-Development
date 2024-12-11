import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState([]); // Stores all quotes
  const [author, setAuthor] = useState(""); // Stores new author input
  const [quote, setQuote] = useState(""); // Stores new quote input
  const [randomIndex, setRandomIndex] = useState(null); // Stores index of the random quote

  useEffect(() => {
    axios
      .get("https://random-quote-generator-u26y.onrender.com/")
      .then((res) => {
        setData(res.data); // Set the data
        setRandomIndex(Math.floor(Math.random() * res.data.length)); // Set an initial random index
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  // Function to handle new quote submission
  const handleSubmit = async () => {
    try {
      await axios.post("https://random-quote-generator-u26y.onrender.com/", {
        quote: quote,
        author: author,
      });

      // Update state with the new quote and pick a new random quote
      const updatedData = [...data, { quote: quote, author: author }];
      setData(updatedData);

      // Clear the input fields
      setAuthor("");
      setQuote("");
    } catch (error) {
      alert("Error submitting the quote");
      console.error(error);
    }
  };

  if (!data.length || randomIndex === null) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');`}
        </style>
        <h1 className="Heading">Random Quote Generator</h1>
        <h3 className="Quote">Quote: {data[randomIndex].quote}</h3>
        <h3 className="Author">Author: {data[randomIndex].author}</h3>
        <button className='Generator' onClick={() => setRandomIndex(Math.floor(Math.random() * data.length))}>New Quote</button>
        <br />
        <h2>Contribute to the Quotes Magazine!</h2>
        <div>
          <label>Quote:</label>
          <input
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className="Generator" onClick={handleSubmit}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
