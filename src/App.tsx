import React, {Component} from 'react';
import './App.css';
import Card from "./Card";

class App extends Component {
    cards = [
        {text: 'test1'}, {text: 'test2'}, {text: 'test3'}, {text: 'test4'}
    ]
    render() {
        return <div className="App">
            <div className='app-container'>
                {
                    this.cards.map(card => (
                        <Card text={card.text}></Card>
                    ))
                }
            </div>
        </div>;
    }
}

export default App;
