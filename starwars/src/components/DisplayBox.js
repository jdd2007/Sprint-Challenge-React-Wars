import React from 'react';
import './StarWars.css'
import IndivCharacter from './IndivCharacter';


const DisplayBox = props => { 
    return (
        <div className="box">
            {props.theCharacters.map( aCharacter => 
                <IndivCharacter 
                    key={aCharacter.created}
                    theirName={aCharacter.name} 
                    theirBirthday={aCharacter.birth_year}
                    theirHeight={aCharacter.height}
                    theirGender={aCharacter.gender}
                />
            )};
        </div>
    );
};

export default DisplayBox;