import React from 'react';
import './jobgal.css';

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id="poscard">
      <div>
        <h2>{person.name}</h2>
        <p>{person.address}</p>
      </div>
    </div>
  );
}

export default Card;