import React from 'react';

//ListItem displays the title recieved from props
const ListItem = (props) => {
    if(props.title.link){
        const {link,title} = props.title
        const augmentedLink = `https://stackoverflow.com${link}`
        return (
            <div className='list-item'>
                <h2><a href={augmentedLink}>{title}</a></h2>
            </div>
        );
    }else{
        return (
            <div className='list-item'>
                <h2>{props.title.title}</h2>
            </div>
        );
    }
};

export default ListItem;