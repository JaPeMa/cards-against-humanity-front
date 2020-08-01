import React, {Component} from "react";
import './Card.css';

class CardClass {
    text: string | undefined;
}

class Card extends Component<CardClass> {
    moving: boolean;
    constructor(props: any) {
        super(props);
        this.moving = false;
    }
    chose() {
        this.moving = true;
        this.forceUpdate();
    }

    endAnimation() {
        // this.moving = false;
        // this.forceUpdate();
    }

    render() {
        return <div className={`card-container${this.moving ? ' move-to-center' : ''}`}
                    onAnimationEnd={() => this.endAnimation()}
                    onClick={() => this.chose()}>
            <p className='card-text'>{this.props.text}</p>
        </div>;
    }
}

export default Card;