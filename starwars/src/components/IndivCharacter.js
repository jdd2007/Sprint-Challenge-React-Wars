import React from 'react';
import './StarWars.css';

const IndivCharacter = (props) => {
   return (
       <div className="indivCharacterClass" >
            <h2>Name = {props.theirName}</h2>
            <h2>Test H2</h2>
       </div>
   );
};

export default IndivCharacter