import React from 'react'; 
import ListToDos from './ListToDos'

class Input extends React.Component {
    state = {inputText: '', list: []} // need to add array to store lists in, on submit items = [...this.state.lists, inputText] ?

handleChange = (event) => {
    this.setState({inputText: event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault();
    // let items = [...this.state.list]; 
    // items.push(this.state.inputText); 
    this.setState({list: [...this.state.list, this.state.inputText], inputText: ''})

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
            <button data-test='submit-button'
            className='btn'
            >Submit</button>
                </form>
                <ListToDos items={this.state.list} text={this.state.inputText}/>
            </div>
        )
    };
};

export default Input