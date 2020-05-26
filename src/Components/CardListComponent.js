import React from 'react';
import Card from './CardComponent'

function CardList({profiles}) {
    return (
        <div className="card-list">
            {profiles.map( profile => <Card {...profile}/>)  } 
        </div>
    );
}

export default CardList;