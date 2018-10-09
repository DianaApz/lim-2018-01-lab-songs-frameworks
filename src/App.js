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
    // let answer = this.state.artists.NCT
    let answer = this.state.artist
    // let ans = this.state.artists.NSYNC
    // , fetch(this.codeNct).then(res => res.json())])
    fetch(this.codeNsync)
      .then(res => res.json())
      .then(resp => {
        answer=resp
        this.setState({
          artist: answer
        })
      })
      .catch(e => console.log('er'))
      
  }
  render() {
    console.log(this.state.artist)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <div>
           <ListMusic 
              all ={this.state.artist[0]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
