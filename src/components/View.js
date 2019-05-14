import React, { Component } from 'react';
import axios from 'axios'

import List from './List/List'

//View is the main container for all other components
//scraping is initiated with the Submit button
class View extends Component {
    constructor(props){
        super(props)
        this.state={
            url:'https://stackoverflow.com/',
            titles:[]
        }
    }

    handleInput = (prop,val) => { 
        this.setState({
            [prop]:val
        })
    }

    handleSubmit = () => {
        const {url} = this.state
        axios.post('/api/websiteInput',{url})
        .then(res => {
            console.log(res)
            this.setState({
                titles:res.data
            })
        })
        .catch(err => console.log(err))
    }

    handleGetLinks = () => {
        const {url} = this.state
        axios.post('/api/websiteInputWithLinks',{url})
        .then(res => {
            console.log(res)
            this.setState({
                titles:res.data
            })
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='view-container'>
                <h1>Want to see Stack Overflow's recent posts?</h1>
                <h1>Click Submit below!</h1>
                <input 
                    type="text" 
                    onChange={(e)=>this.handleInput('url',e.target.value)}
                    className='view-input'
                    value={this.state.url}
                    disabled
                    />
                <br/>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
                <button onClick={this.handleGetLinks}>
                    Get Links
                </button>

                <List titles={this.state.titles}/>
            </div>
        );
    }
}

export default View;