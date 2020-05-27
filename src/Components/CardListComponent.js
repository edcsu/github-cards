import React from 'react';
import ProfileCard from './CardComponent'

function CardList({profiles}) {
    return (
        <div className="card-list">
            {profiles.map( profile => <ProfileCard key={profile.name} {...profile}/>)  } 
        </div>
    );
}

export default CardList;