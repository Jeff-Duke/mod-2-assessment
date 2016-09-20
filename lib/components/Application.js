import React, { Component } from 'react';

import scoreWord from '../score-word';

import WordInput from './WordInput';

export default class Application extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            previousWords: [],
        };
    }

    submitEvent(wordToScore) {
        this.setState({ score: scoreWord(wordToScore) });
        this.setState({
            previousWords: this.state.previousWords.concat( wordToScore )
        });
    }

    render() {
        return (
            <div className="Application">
                <WordInput
                    handleSubmit={(wordToScore) => this.submitEvent(wordToScore) }
                    handleClear={() => this.setState({ score: 0, }) }
                    />
                <div> Score: {this.state.score} </div>
                <div>
                    <ul>
                        {this.state.previousWords.map(word => {
                            return <li key={Date.now()}>{word}: {scoreWord(word) }</li>
                        }) }
                    </ul>
                </div>
            </div>
        )

    }
}