import React, { Component } from 'react';
import '../components/StarWars.css'
import IndivCharacter from './IndivCharacter';

const DisplayBox = props => { 

    return (
        <div className="box">
            {props.theCharacters.map( aCharacter => 
                <IndivCharacter 
                    key={aCharacter.url}
                    theirName={aCharacter.name} 
                    theirBirthday={aCharacter.birth_year}
                    theirHeight={aCharacter.height}
                />
            )};
        </div>
    );
};
export default DisplayBox;