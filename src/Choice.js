import React from 'react';
import "./Choice";

class Choice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:props.text,
            outcomes:props.outcomes
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeState=props.changeState;
    }

    componentDidUpdate(prevProps){
        if(prevProps.text !== this.props.text){
            this.setState({
                text: this.props.text,
                outcomes: this.props.outcomes
            });
        }
        console.log("props changed")
    }

    handleClick(e){
        let outcome=Math.random();
        for(let i =0;i<this.state.outcomes.length;i++){
            if(outcome<this.state.outcomes[i].probability){
                outcome=this.state.outcomes[i].goTo;
                break;
            }else{
                outcome=outcome-this.state.outcomes[i].probability;
            }
        }
        this.changeState(outcome);
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.text}</button>
        );
    }
}

export default Choice;