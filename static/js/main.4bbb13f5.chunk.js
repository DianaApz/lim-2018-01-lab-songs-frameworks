(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(8),r=n.n(c),o=(n(14),n(2)),s=n(3),l=n(5),u=n(4),m=n(6),h=n(1),b=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).song=t.song,n.state={number:0},n.like=n.like.bind(Object(h.a)(Object(h.a)(n))),n.dislike=n.dislike.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"like",value:function(){this.setState({number:this.state.number+1})}},{key:"dislike",value:function(){this.state.number>0&&this.setState({number:this.state.number-1})}},{key:"render",value:function(){return i.a.createElement("p",null,this.song,i.a.createElement("span",null,this.state.number),i.a.createElement("button",{className:"btn",onClick:this.like},"like"),i.a.createElement("button",{className:"btn",onClick:this.dislike},"dislike"))}}]),e}(a.Component),d=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).name=t.name,n.image=t.image,n.listSongs=t.listSongs,console.log(t),n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,this.name),i.a.createElement("img",{src:this.image,alt:"img"}),i.a.createElement("div",null,this.listSongs.map(function(t){return i.a.createElement(b,{song:t.name,key:t.playcount})})))}}]),e}(a.Component),k=(n(16),function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={artist:[]},n.url="http://ws.audioscrobbler.com/2.0/?",n.apiKey="249a58095b144df61f95be44d013c3d6",n.codeNct="".concat(n.url,"method=artist.gettoptracks&artist=NCT&api_key=").concat(n.apiKey,"&limit=10&format=json"),n.codeNsync="".concat(n.url,"method=artist.gettoptracks&artist=NSYNC&api_key=").concat(n.apiKey,"&limit=10&format=json"),n.codeBts="".concat(n.url,"method=artist.gettoptracks&artist=BTS&api_key=").concat(n.apiKey,"&limit=10&format=json"),n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){var t=this,e=this.state.artist;Promise.all([fetch(this.codeNsync).then(function(t){return t.json()}),fetch(this.codeNct).then(function(t){return t.json()})]).then(function(n){e=n,t.setState({artist:e})}).catch(function(t){return console.log("er")})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h2",null,"Ranking")),i.a.createElement("div",{className:"App-intro"},i.a.createElement("div",null,this.state.artist.map(function(e){return i.a.createElement(d,{all:t.state.artist,listSongs:e.toptracks.track,name:e.toptracks["@attr"].artist,image:e.toptracks.track[0].image[3]["#text"],key:e.toptracks["@attr"].total})}))))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.4bbb13f5.chunk.js.map