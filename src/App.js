import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './story.json';
import StoryNode from './StoryNode'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      state:0
      };
    this.story=data;
    this.changeState = this.changeState.bind(this);
  }

  changeState(newState){
    this.setState({
        state:newState
    });
    console.log(this.state.state);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <StoryNode changeState={this.changeState} text={this.story[this.state.state].text} choices={this.story[this.state.state].choices}/>
        </header>
      </div>
    );
  }
}

export default App;
