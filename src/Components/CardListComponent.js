import React from 'react';
import Card from './CardComponent'
import testData from '../data/seed'

function CardList() {
    return (
        <div className="card-list">
            {testData.map( profile => <Card {...profile}/>)  } 
        </div>
    );
}

export default CardList;