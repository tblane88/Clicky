import React, { Component } from "react";
import Navbar from "./Navbar";
import ChoiceCard from "./ChoiceCard"
import players from "./players.json"

class Clicky
 extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    correctClick: false
  };

  handleClick = (id, clicked) => {
    console.log("inside click")
    console.log(this.state.players[0])
    
    if (clicked) {
      this.setState({
        correctClick: true
      })
    } else {
    const updatedScore = this.state.score + 1;
    
      this.setState({
        score: updatedScore,
        player: {
          clicked: true,
        }
      })
    }
    console.log(this.state.score)
  }

  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          correctClick={this.state.correctClick}
        />
        <div className="row">
        {this.state.players.map(player => (
          <ChoiceCard
          id={player.id}
          name={player.name}
          image={player.image}
          clicked={player.clicked}
          handleClick = {this.handleClick}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Clicky
;
