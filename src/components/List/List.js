import React from 'react';
import ListItem from './ListItem'


//List is a container for the list items
const List = (props) => {
    const mappedTitles = props.titles.map((title,i) => {//mapping over each title we recieved from the scrape
        return <ListItem title={title} key={i}/> //setting props of unique instances of ListItem components
    })

    //displaying all of the ListItem components below
    return (
        <div id='list-container'>
            <h3>StackOverflow Recent Posts:</h3>
            {mappedTitles}
        </div>
    );
};

export default List;