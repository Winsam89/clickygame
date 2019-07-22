import React, { Component } from "react";
import Card from "./components/Card";
import Box from "./components/box";
import Title from "./components/title";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
     
      }
    });
  }
  render() {
    return (
      <Box>
        <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Box>
    );
  }
}

export default App;
