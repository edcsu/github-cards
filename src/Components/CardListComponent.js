import React from 'react';
import Card from './CardComponent'

function CardList({profiles}) {
    return (
        <div className="card-list">
            {profiles.map( profile => <Card key={profile.name} {...profile}/>)  } 
        </div>
    );
}

export default CardList;