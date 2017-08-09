require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Answer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className="answer" type="text" ref="input" onKeyDown={(e) => this._onKeyDown(e)} />
        );
    }

    _onKeyDown(e) {
        if (e.keyCode === 13) { // Enterキー
            this.props.checkAnswer(e.target.value);
        }
    }

    clear() {
        this.refs.input.value = ''
    }
}

Answer.defaultProps = {
};

export default Answer;
