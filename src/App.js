import React, { Component } from 'react';
import logo from './logo.svg';
import ListMusic from './list';



import './App.css';
// Application name	music
// API key	249a58095b144df61f95be44d013c3d6
// Shared secret	5dac3d033d035d4e41e78e656304df56
// Registered to	karidia12
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist:[]
      // artists: {
      //   NCT: {
      //     name:'',
      //     image:'',
      //     arrayNct:[]
      //   },
      //   NSYNC: []
      // },
    }
    this.url = 'http://ws.audioscrobbler.com/2.0/?';
    this.apiKey = '249a58095b144df61f95be44d013c3d6';
    this.codeNct = `${this.url}method=artist.gettoptracks&artist=NCT&api_key=${this.apiKey}&limit=10&format=json`
    this.codeNsync = `${this.url}method=artist.gettoptracks&artist=NSYNC&api_key=${this.apiKey}&limit=10&format=json`
    this.codeBts = `${this.url}method=artist.gettoptracks&artist=BTS&api_key=${this.apiKey}&limit=10&format=json`
    // this.code = `${this.url}method=user.getWeeklyArtistChart&api_key=${this.apiKey}&user=karidia12&limit=10&format=json`
    // fetch(this.code)
    // .then(res => res.json())
    // .then(res => console.log(res))
    // Promise.all([fetch(this.codeNsync).then(res => res.json()), fetch(this.codeNct).then(res => res.json())])
    // .then(resp => {
    // console.log(resp)
    //array 
    //  let ar=[]
    // arr de obj [{track:[{},{}],arroba},{}]res.toptracks[0].track

    // resp.forEach(res => {
    //  console.log(resp[0].toptracks.track)
    // console.log(res.toptracks)

    // })



    //  console.log(resp.toptracks.track)
    // })}


  }


  componentWillMount() {
    // let answer = this.state.artists.NCT
    let answer = this.state.artists
    // let ans = this.state.artists.NSYNC
    Promise.all([fetch(this.codeNsync).then(res => res.json()), fetch(this.codeNct).then(res => res.json())])
      .then(resp => {
        // console.log(resp[0].toptracks["@attr"].artist);
        // console.log(resp[0].toptracks.track[0].image[3]["#text"]);
        // console.log(resp)
        //array 
        //  let ar=[]
        // arr de obj [{track:[{},{}],arroba},{}]res.toptracks[0].track
        // answer.arrayNct = (resp[0].toptracks.track)
        answer=resp
        this.setState({
          artist: answer
          // artists: {
            // NCT: {
            //   arrayNct:answer.arrayNct
            // }
          // }
        })



        //  console.log(resp.toptracks.track)
      })

      .catch(e => console.log('er'))

  }
  render() {

    // console.log(this.state.artists.NCT)


    // console.log(this.state.artists)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <div>
            {this.state.artist.map(art => { 
              //  console.log(art.toptracks["@attr"].artist)
              //  console.log(art.toptracks.track[0].image[3]["#text"])
              //  console.log(art)   
               return (<ListMusic 
                listSongs={art.toptracks.track}
                name={art.toptracks["@attr"].artist}
                image={art.toptracks.track[0].image[3]["#text"]}
                key={art.toptracks["@attr"].total}
              />);
            })
            }

              {/* {this.state.artists.NCT.arrayNct.map(art => { */}
              {/* console.log(art) */}
              {/* return (<ListMusic */}
                {/* music={art.name} */}
                {/* name={art.artist.name} */}
                
                {/* key={art.playcount} */}
              {/* />); */}





            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
