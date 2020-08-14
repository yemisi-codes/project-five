import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: ""
            }
        }
    
userSelection = (event) => {
    console.log(event.target.name);

    this.setState({
    userSelection: event.target.value 
    })
}

runForm = (event) => {
    event.preventDefault();
    this.props.userSelection ( event, this.state.userSelection );
}

    render() {
        console.log(this.props);
        return(

        <form action="">

                <label htmlFor="whichMeme">Select meme:</label>
                <input name="memeSelection" type="text"/>

        <button onClick={ (event) => this.props.userSelection }>Find a meme</button>
        </form>
            
        )
    }
}

export default Form;