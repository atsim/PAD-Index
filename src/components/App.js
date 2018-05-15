import React, { Component } from 'react';
import CardList from './CardList';
import './styles/App.css';
import Card from '../Card';
import DetailView from './DetailView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  loaderino() {    
    fetch('https://www.padherder.com/api/monsters/')
      .then(res => res.json())
      .then(responseBody => this.data = responseBody)
      .catch(err => console.log(err));
    }

  handleOnClick(id) {
    /*
    fetch('https://www.padherder.com/api/monsters/')
      .then(res => {
        res.json();
      })
      .then(data => {
        const card = new Card(data[id-1]);

        this.setState({ card });
      })
      .catch(err => console.log(err));
    */

    const card = new Card(this.data[id-1]);
    this.setState({ card });
  }

  render() {

    window.onload = this.loaderino();

    return (
        //<script src="jquery-3.3.1.min.js"></script>
        <div className="App"> 
          <CardList handleOnClick={this.handleOnClick} currentCard={this.state.card.id}/>
          <DetailView card={this.state.card}/>
        </div>
    );
  }
}


export default App;