import React from 'react';

//ListItem displays the title recieved from props
const ListItem = (props) => {
    return (
        <div className='list-item'>
            <h2>{props.title}</h2>
        </div>
    );
};

export default ListItem;