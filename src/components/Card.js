require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref="card" className="card">
                <div className="card-front">{this.props.number}</div>
                <div className="card-back"></div>
            </div>
        );
    }

    flip() {
        this.refs.card.classList.add('flipped');
        setTimeout(() => {
            this.refs.card.classList.remove('flipped');
        }, 700);
    }
}

Card.defaultProps = {
};

export default Card;
