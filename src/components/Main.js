require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Card from './Card';
import Answer from './Answer';

import moji from 'moji';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="stage">
                <div>
                    <select ref="digits">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    ケタの足し算
                </div>
                <Card ref="card1" number={this.state.number1} />
                <span className="operator">+</span>
                <Card ref="card2" number={this.state.number2} />
                <span className="operator">=</span>
                <Answer ref="answer" checkAnswer={(val) => this.checkAnswer(val)} />
                <div><button onClick={() => this.nextQuestion()}>次の問題</button></div>
                <div ref="correct" id="correct">正解！🎉</div>
                <div ref="error" id="error"><span ref="errorMessage"></span>😵</div>
            </div>
        );
    }

    componentWillMount() {
        this.shuffle();
    }

    digits() {
        return this.refs.digits ? parseInt(this.refs.digits.value) : 1;
    }

    shuffle() {
        const digits = this.digits();
        const num1 = Math.round(Math.random() * Math.pow(10, digits));
        const num2 = Math.round(Math.random() * Math.pow(10, digits));

        this.setState({
            number1: num1,
            number2: num2,
            answer: num1 + num2
        });
    }

    nextQuestion() {
        this.refs.card1.flip();
        this.refs.card2.flip();
        this.refs.answer.clear();
        setTimeout(() => {
            this.shuffle();
        }, 700);
    }

    checkAnswer(userAnswer) {
        userAnswer = moji(userAnswer).convert('ZE', 'HE').toString();
        if (userAnswer.match(/^[0-9]+$/)) {
            if (parseInt(userAnswer) === this.state.answer) {
                this.showCorrect();
            } else {
                this.showError('ちがうよ');
            }
        } else {
            this.showError('数字を入れてね');
        }
    }

    showCorrect() {
        this.refs.correct.classList.add('show');
        setTimeout(() => {
            this.refs.correct.classList.remove('show');
            this.nextQuestion();
        }, 2000);
    }

    showError(message) {
        this.refs.errorMessage.textContent = message;
        this.refs.error.classList.add('show');
        setTimeout(() => {
            this.refs.error.classList.remove('show');
        }, 2000);
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
