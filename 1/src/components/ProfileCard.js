import React from 'react'

function ProfileCard(props){
    const cardstyle={
        border:'1px solid black',
        color: 'red',
        fontSize:'16px',
        fontWeight:'bold'
    };
    return(
        <div style={cardstyle}>
            <p>Name: {props.name}</p>
            <p>title: {props.title}</p>
            <p>description: {props.description}</p>
        </div>
    );
}

export default ProfileCard;