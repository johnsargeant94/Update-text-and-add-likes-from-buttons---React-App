import React from 'react';

import './App.css';

class App extends React.Component {
  // How to use State on H1
  state = {
    myText: "My original Text",
    likes: 0,
    persons: [
      {},
      {},
      {}
    ]
  }

  // -----------------

  // here is the function
    changeText = () => {
      // Changing State Text
      this.setState({
        myText: "My updated Text"
        
      })
      // Checking if working
      console.log("Button Clicked");
    }

    increaseLikes = () =>{
        this.setState({
        likes: this.state.likes +=1
      })
    }
  //  -----------------
  render() {
    return (
      <>
        <h1>{this.state.myText}</h1>
        <button onClick={this.changeText}>Click Me</button>
        
        <h1>Number of likes: {this.state.likes}</h1>
        <button onClick={this.increaseLikes}>Add like</button>
      </>
    )
  }
}

export default App;
