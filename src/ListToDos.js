import React from 'react'; 

const ListToDos = props => {
    return (
        <div className='todos' data-test='todos-component'>
            <h4 className='todo-header'>Here are your tasks: </h4>
            <ul className='ul'>
    <li data-test='todos-li'> {props.items}</li>
            </ul>
        </div >
    );
};

export default ListToDos