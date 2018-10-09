import React, { Component } from 'react';

class Song extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.song = props.song
        this.state = {
            number: 0
        }
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }
    like() {
        this.setState({
            number: this.state.number + 1
        });
    }

    dislike() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        };
    }

    render() {
        return (
            <p>{this.song}<span>{this.state.number}</span><button className="btn" onClick={this.like}>like</button>
                <button className="btn" onClick={this.dislike}>dislike</button></p>
        )
    }
}
export default Song