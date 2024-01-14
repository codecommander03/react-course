import React from 'react'
import { useState } from 'react'

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handlePlayerNameChange(e) {
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handlePlayerNameChange}/>;
        //btnCaption = 'Save';
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player