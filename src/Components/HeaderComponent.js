import React from 'react';
import GithubIcon from './GithubIcon';

class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="page-header">
                <GithubIcon />
                <h1>
                    Github page profiles         
                </h1>
            </header>
        );
    }
}

export default HeaderComponent;