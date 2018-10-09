import React, { Component } from 'react';

class Song extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.song=props.song
    }
    render() { 
        return (
            <p>{this.song}</p>
        )
    }
}
export default Song