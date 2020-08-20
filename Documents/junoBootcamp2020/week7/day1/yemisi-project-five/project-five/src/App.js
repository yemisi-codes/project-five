import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

// Pull meme images from meme API 
// User selects meme image through form search bar
// Memes displayed on page according to user selection

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

    componentDidMount() {
      axios({
        url: `https://api.giphy.com/v1/gifs/search?`,
        method: `GET`,
        responseType: `json`,
        params: {
        key: `RUHodWF9tkJAFokry8lAL7QYCWLKQYpd`
      }
    })
    .then( (result) => {
      console.log(result);
    })
 }

  render() {
    return (
      <div className="App">
        <h1>Pick a Meme!</h1>
      <Form />
      </div>

    );
  

export default App;




