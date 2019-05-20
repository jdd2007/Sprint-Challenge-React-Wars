import React, { Component } from 'react';
import '../components/StarWars.css'
import IndivCharacter from './IndivCharacter';

const DisplayBox = props => { 
    return (
        <div className="box">
            <h1>Here is my display box</h1>
            <IndivCharacter />
            <IndivCharacter />
            <IndivCharacter />
        </div>
    );
};
export default DisplayBox;