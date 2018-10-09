import React, { Component } from 'react';
import logo from './logo.svg';
import ListMusic from './list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist:[]
    }
    this.url = 'http://ws.audioscrobbler.com/2.0/?';
    this.apiKey = '249a58095b144df61f95be44d013c3d6';
    this.codeNct = `${this.url}method=artist.gettoptracks&artist=NCT&api_key=${this.apiKey}&limit=10&format=json`
    this.codeNsync = `${this.url}method=artist.gettoptracks&artist=NSYNC&api_key=${this.apiKey}&limit=10&format=json`
    this.codeBts = `${this.url}method=artist.gettoptracks&artist=BTS&api_key=${this.apiKey}&limit=10&format=json`   
  }
  componentWillMount() {
    let answer = this.state.artist
    Promise.all([fetch(this.codeNsync).then(res => res.json()), fetch(this.codeNct).then(res => res.json())])
      .then(resp => {
        answer=resp
        this.setState({
          artist: answer
        })
      })
      .catch(e => console.log('er'))

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Ranking</h2>
        </header>
        <div className="App-intro">
          <div>
            {this.state.artist.map(art => {  
               return (<ListMusic 
                all={this.state.artist}
                listSongs={art.toptracks.track}
                name={art.toptracks["@attr"].artist}
                image={art.toptracks.track[0].image[3]["#text"]}
                key={art.toptracks["@attr"].total}
              />);
            })
            }           
          </div>
        </div>
      </div>
    )
  }
}

export default App;
