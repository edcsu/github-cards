import React from 'react';
import axios from 'axios';
import {Button} from 'react-toolbox/lib/button';

const baseUrl = 'https://api.github.com/users/'

class FormComponent extends React.Component {
    state = { userName : '' };
    
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`${baseUrl}${this.state.userName}`)
            this.props.onSubmit(res.data)
            this.setState( { userName: ""} )     
        } catch (error) {
            console.log(error);    
        }

    };

    render() {
        return (
            <form className="inputForm" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.userName}
                    onChange={e => this.setState( { userName: e.target.value} )}
                    type = "text"
                    placeholder = "Github username"
                    required />
                <Button label="Add card" className="add-button" raised />
            </form>
        );
    }
}

export default FormComponent;