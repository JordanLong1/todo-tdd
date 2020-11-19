import React from 'react'; 

const ListToDos = props => {
    console.log(props)
    return (
        <div className='todos' data-test='todos-component'>
            <ul>
    <li data-test='todos-li'> {props.items}</li>
            </ul>
        </div >
    );
};

export default ListToDos