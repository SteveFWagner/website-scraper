import React from 'react';

const ListItem = (props) => {
    // console.log(props)
    return (
        <div className='list-item'>
            <h2>{props.title}</h2>
        </div>
    );
};

export default ListItem;