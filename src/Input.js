import React from 'react'; 
import ListToDos from './ListToDos'

class Input extends React.Component {
    state = {inputText: ''}

handleChange = (event) => {
    this.setState({inputText: event.target.value})
}

handleSubmit = (e) => {
    e.preventDefault(); 
    
}

    render() {
        return (
            <div data-test='input-component'>
                <form className='input-form' onSubmit={this.handleSubmit}>
            <input className='input'
            data-test='input-field'
            type='text'
            onChange={this.handleChange}
            value={this.state.inputText}
            />
            <button data-test='submit-button'>Submit</button>
                </form>
                <ListToDos />
            </div>
        )
    };
};

export default Input