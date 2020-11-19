import React from 'react'; 

const ListToDos = props => {
    return (
        <div className='todos' data-test='todos-component'>
            <ul className='ul'>
    <li data-test='todos-li'> {props.items}</li>
            </ul>
        </div >
    );
};

export default ListToDos