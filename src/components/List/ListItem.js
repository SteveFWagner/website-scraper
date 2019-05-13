import React from 'react';

//ListItem displays the title recieved from props
const ListItem = (props) => {
    if(props.title.link){ //checking if the link exists on the props.title object
        const {link,title} = props.title
        const augmentedLink = `https://stackoverflow.com${link}` //adding the stackoverflow base url to the link scraped
        return (
            <div className='list-item'>
                <h2><a href={augmentedLink} target='_blank' rel="noopener noreferrer">{title}</a></h2>
            </div>
        );
    }else{ //if there is no link, only display the title
        return (
            <div className='list-item'>
                <h2>{props.title.title}</h2>
            </div>
        );
    }
};

export default ListItem;