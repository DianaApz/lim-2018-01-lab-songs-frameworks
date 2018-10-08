import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Application name	music
// API key	249a58095b144df61f95be44d013c3d6
// Shared secret	5dac3d033d035d4e41e78e656304df56
// Registered to	karidia12
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists:[
      ],
  
    }
    this.url = 'http://ws.audioscrobbler.com/2.0/?';
    this.apiKey = '249a58095b144df61f95be44d013c3d6';
    this.codeNct = `${this.url}method=artist.gettoptracks&artist=NCT&api_key=${this.apiKey}&limit=10&format=json` 
    this.codeNsync = `${this.url}method=artist.gettoptracks&artist=NSYNC&api_key=${this.apiKey}&limit=10&format=json`
    this.codeBts = `${this.url}method=artist.gettoptracks&artist=NSYNC&api_key=${this.apiKey}&limit=10&format=json`
    this.codeExo = `${this.url}method=artist.gettoptracks&artist=NSYNC&api_key=${this.apiKey}&limit=10&format=json`
    
    Promise.all([fetch(this.codeNsync).then(res=>res.json()),fetch(this.codeNct).then(res=>res.json())])
    .then(resp=>{
      // console.log(resp)
     //array 
     let ar=[]
     resp.forEach(res=>{
      //  console.log(res.toptracks)
      ar.push(res.toptracks)
    })
     console.log(ar)
    //  console.log(resp.toptracks.track)
    })
    .catch(e=>console.log('er'))
  }
  getArtist(code){
    

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
