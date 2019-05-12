import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
    // console.log('ListProps: ',props)
    const mappedTitles = props.titles.map(title => {
        return <ListItem title={title}/>
    })
    return (
        <div id='list-container'>
            <h3>StackOverflow Recent Posts:</h3>
            {mappedTitles}
        </div>
    );
};

export default List;