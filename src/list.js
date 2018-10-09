import React, { Component } from 'react';
import Song from './songs';

class ListMusic extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.image = props.image;
        this.listSongs = props.listSongs;
        // console.log(props);


    }
    render() {

        return (
            <div>

                <p>{this.name}</p>
                <img src={this.image} alt='img'/>
                {/* <p>{this.listSongs}</p> */}
                <div>{this.listSongs.map(ele => {
                    // console.log(ele)
                    return (
                        <Song
                            song={ele.name}
                            key={ele.playcount}
                        />
                    )
                })
                }</div>
            </div>
        )
    }

}
export default ListMusic