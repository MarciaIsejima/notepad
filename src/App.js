import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';


class App extends Component {

  constructor(props){
    super (props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "React",
          details: "Learn React using some tutorial"
        },
        {
          id: 2,
          title: "Node.js",
          details: "Read chapter 02 from textbook"
        },
        {
          id: 3,
          title: "Java Quiz",
          details: "Redo Java introduction quiz"
        },
      ],
      name: "Marcia",
    }
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
