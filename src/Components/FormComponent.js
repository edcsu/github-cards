import React from 'react';

class FormComponent extends React.Component {
    render() {
        return (
            <form className="inputForm">
                <input type="text" placeholder="Github username" />
                <button className="add-button"> Add card </button>
            </form>
        );
    }
}

export default FormComponent;