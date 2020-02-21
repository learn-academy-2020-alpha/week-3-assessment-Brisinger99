// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This is setting a state that will be constently rendered and updated
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This takes in an input from a keyboard know as an event (e) and changes the userInput feild to take input
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. This is destructering the userInput state so it can be used with more ease
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. This is what the user will see where to put the input */}
          onChange={ this.robot }
          {/* 5. this is what recordes the users input as a value*/}
          value={ userInput }
        />

        <div>
          {/* 6. This displayes the good robot componet on to the page */}
          <GoodRobot
            {/* 7. this is sending information from the App class to the GoodRobot class using props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Dive tag surronding because return can only render one objects
      <div>
        <h3>Good Robot</h3>
        {/* 9. This takes in the information form the App class as props and displays it to the user*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Allows other components to be able to see what this component does.
export default GoodRobot
