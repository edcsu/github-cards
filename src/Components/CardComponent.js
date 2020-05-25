import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
        <div className="github-profile">
            <img src={profile.avatar_url} alt="avatar" />
            <div className="name">{profile.name}</div>
            <div className="name">{profile.company}</div>
        </div>
        );
    }
}

export default Card;