import React, { Component } from 'react';

export default class WordInput extends Component {
    constructor() {
        super();
        this.state={
            wordToScore: ''
        };
    }
    updateProperties(e) {
        const {name, value} = e.target;
        this.setState({ [name]: value});
    }

    clearInputs() {
        this.setState({ wordToScore: '',});
        this.props.handleClear();
    }

    render() {
        return(
            <article>
                <input 
                    type="text"
                    name="wordToScore"
                    value={this.state.wordToScore}
                    placeholder="Enter a word"
                    onChange={(e) => this.updateProperties(e)}
                />
                <button 
                    children="Submit"
                    onClick={() => this.props.handleSubmit(this.state.wordToScore)}
                />
                <button 
                    children="Clear"
                    onClick={() => this.clearInputs()}
                />
            </article>
        )
    }
}