import React from 'react';
import './StarWars.css';

const IndivCharacter = (props) => {
   return (
       <div className="indivCharacterClass" >
            <h2>Name: {props.theirName}</h2>
            <h4>Gender: {props.theirGender}</h4>
            <h4>Birthday: {props.theirBirthday}</h4>
            <h4>Height: {props.theirHeight}</h4>
       </div>
   );
};

export default IndivCharacter;