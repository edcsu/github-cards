import React from 'react';
import { Avatar } from 'react-toolbox/lib/avatar';
class ProfileCard extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <Avatar>
                    <img className="avatar" src={profile.avatar_url} alt="avatar" />
                </Avatar>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;