import React, { Component } from 'react';
import '../components/StarWars.css'
import IndivCharacter from './IndivCharacter';

const DisplayBox = props => { 

    return (
        <div className="box">
            {props.theCharacters.map( aCharacter => 
                <IndivCharacter 
                    theirName={aCharacter.name} key={aCharacter.created}/>
            )};
        </div>
    );
};
export default DisplayBox;