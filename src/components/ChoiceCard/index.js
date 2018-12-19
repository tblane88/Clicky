import React from "react";
import "./style.css";

function ChoiceCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id, props.clicked)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    
      
    </div>
  );
}

export default ChoiceCard;
