import React from 'react';
import "./StoryNode";
import Choice from './Choice'

class StoryNode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:props.text,
            choices:props.choices
        };
        this.changeState=props.changeState;

    }

    componentDidUpdate(prevProps){
        if(prevProps.text !== this.props.text){
            this.setState({
                choices:this.props.choices,
                text: this.props.text,
            });
        }
    }


    render(){
        console.log(this.state.choices);
        return(
            <div>
                <p>{this.state.text}</p>
                    {this.state.choices.map(choice => <Choice changeState={this.changeState} text={choice.text} outcomes={choice.outcomes}/>)}
            </div>

        );
    }
}

export default StoryNode;