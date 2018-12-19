import React from "react";

function Navbar(props) {

  function Middle() {
    if(props.score === 0) {
      return "Click to start Game!";
    }
    else if(props.correctClick === true) {
      return "You guessed correctly!";
    }else {
      return "You guessed incorrectly!"
    }
  }
  
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="#">Clicky Game</a>
      <h3 className="navbar-brand">{Middle()}</h3>
      <h3 className="navbar-brand">Score: {props.score} | Top Score: {props.topScore}</h3>
    </nav>
  );
}

export default Navbar;

