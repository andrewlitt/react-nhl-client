(this["webpackJsonpreact-nhl"]=this["webpackJsonpreact-nhl"]||[]).push([[0],{164:function(e,a,t){e.exports=t.p+"static/media/triangle.7ad38c59.png"},165:function(e,a,t){e.exports=t.p+"static/media/circle.e6920dd7.png"},166:function(e,a,t){e.exports=t.p+"static/media/square.007cf8d2.png"},167:function(e,a,t){e.exports=t.p+"static/media/diamond.9090a187.png"},168:function(e,a,t){e.exports=t.p+"static/media/wye.afd12ac2.png"},211:function(e,a,t){e.exports=t(411)},216:function(e,a,t){},218:function(e,a,t){},219:function(e,a,t){},405:function(e,a,t){},406:function(e,a,t){},407:function(e,a,t){},409:function(e,a,t){},410:function(e,a,t){},411:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=t(22),m=t(36),s=(t(216),t(217),t(71)),i=t(34),d=t(72),u=t(73),E=t(79),h=(t(218),t(11)),g="https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/",p="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/",b="https://nhl.bamcontent.com/images/headshots/current/168x168/",y={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},f=t(164),k=t.n(f),v=t(165),N=t.n(v),w=t(166),S=t.n(w),O=t(167),j=t.n(O),C=t(168),L=t.n(C),D=t(412),x=(t(219),t(15)),T=function(e){var a=e.plays,t=e.away,r=e.home,c=e.homeStart,o=function(e,a,n){return n.filter((function(t){return t.team&&t.coordinates.x&&t.team.id===e&&t.result.eventTypeId===a?t:null})).map((function(a){var n=2===a.about.period?-1:1;"left"===c&&(n*=-1);var l=e===r.id?r.color1:t.color1;return{name:a.result.description,playerID:a.players[0].player.id,x:n*a.coordinates.x,y:n*a.coordinates.y,color:l}}))},m=Object(n.useState)(!0),s=Object(h.a)(m,2),i=s[0],d=s[1],u=Object(n.useState)(!0),E=Object(h.a)(u,2),g=E[0],p=E[1],y=Object(n.useState)(!0),f=Object(h.a)(y,2),v=f[0],w=f[1],O=Object(n.useState)(!0),C=Object(h.a)(O,2),T=C[0],H=C[1],I=Object(n.useState)(!0),P=Object(h.a)(I,2),G=P[0],M=P[1],R=Object(n.useState)(!0),z=Object(h.a)(R,2),A=z[0],J=z[1],B=Object(n.useState)(!0),W=Object(h.a)(B,2),q=W[0],K=W[1];return l.a.createElement("div",{className:"chart-container"},l.a.createElement(x.a,{className:"chart",width:"90%",aspect:2.35},l.a.createElement(x.c,null,l.a.createElement(x.e,{type:"number",dataKey:"x",domain:[-100,100],hide:!0}),l.a.createElement(x.f,{type:"number",dataKey:"y",domain:[-43,43],hide:!0}),l.a.createElement(x.d,{cursor:{strokeDasharray:"3 3"},content:l.a.createElement((function(e){var a=e.active,t=e.payload;return a?(console.log(t[1]),l.a.createElement("div",{className:"tooltip",style:{backgroundColor:t[1].payload.color,color:"white"}},l.a.createElement("img",{src:b+t[1].payload.playerID+".jpg",alt:"Player"}),l.a.createElement("p",{className:"label"},t[1].payload.name))):null}),null)}),l.a.createElement(x.b,{name:"home-goals",hide:!(i&&v),data:o(r.id,"GOAL",a),fill:r.color1,stroke:r.color2,shape:"triangle"}),l.a.createElement(x.b,{name:"home-shots",hide:!(i&&T),data:o(r.id,"SHOT",a),fill:r.color1,stroke:r.color2,shape:"circle"}),l.a.createElement(x.b,{name:"home-missed",hide:!(i&&G),data:o(r.id,"MISSED_SHOT",a),fill:r.color1,stroke:r.color2,shape:"square"}),l.a.createElement(x.b,{name:"home-blocked",hide:!(i&&A),data:o(r.id,"BLOCKED_SHOT",a),fill:r.color1,stroke:r.color2,shape:"diamond"}),l.a.createElement(x.b,{name:"home-hits",hide:!(i&&q),data:o(r.id,"HIT",a),fill:r.color1,stroke:r.color2,shape:"wye"}),l.a.createElement(x.b,{name:"away-goals",hide:!(g&&v),data:o(t.id,"GOAL",a),fill:t.color2,stroke:t.color1,shape:"triangle"}),l.a.createElement(x.b,{name:"away-shots",hide:!(g&&T),data:o(t.id,"SHOT",a),fill:t.color2,stroke:t.color1,shape:"circle"}),l.a.createElement(x.b,{name:"away-missed",hide:!(g&&G),data:o(t.id,"MISSED_SHOT",a),fill:t.color2,stroke:t.color1,shape:"square"}),l.a.createElement(x.b,{name:"away-blocked",hide:!(g&&A),data:o(t.id,"BLOCKED_SHOT",a),fill:t.color2,stroke:t.color1,shape:"diamond"}),l.a.createElement(x.b,{name:"away-hits",hide:!(g&&q),data:o(t.id,"HIT",a),fill:t.color2,stroke:t.color1,shape:"wye"}))),l.a.createElement(D.a,{className:"legend"},l.a.createElement("div",{className:"legend-plays"},l.a.createElement("button",{className:v?"":"strike",onClick:function(){return w(!v)}},l.a.createElement("img",{src:k.a,alt:"Triangle"}),l.a.createElement("p",null,"Goals")),l.a.createElement("button",{className:T?"":"strike",onClick:function(){return H(!T)}},l.a.createElement("img",{src:N.a,alt:"Circle"}),l.a.createElement("p",null,"Shots")),l.a.createElement("button",{className:G?"":"strike",onClick:function(){return M(!G)}},l.a.createElement("img",{src:S.a,alt:"Square"}),l.a.createElement("p",null,"Missed Shots")),l.a.createElement("button",{className:A?"":"strike",onClick:function(){return J(!A)}},l.a.createElement("img",{src:j.a,alt:"Diamond"}),l.a.createElement("p",null,"Blocked Shots")),l.a.createElement("button",{className:q?"":"strike",onClick:function(){return K(!q)}},l.a.createElement("img",{src:L.a,alt:"Wye"}),l.a.createElement("p",null,"Hits"))),l.a.createElement("div",{className:"legend-teams"},l.a.createElement("button",{className:g?"":"strike",style:{color:t.color1},onClick:function(){return p(!g)}},l.a.createElement("p",null,t.teamName)),l.a.createElement("button",{className:i?"":"strike",style:{color:r.color1},onClick:function(){return d(!i)}},l.a.createElement("p",null,r.teamName)))))},H=t(432),I=t(436),P=t(435),G=t(433),M=t(434),R=(t(405),function(e){var a=e.name,t=e.data;return l.a.createElement(D.a,{className:"player-table"},l.a.createElement("h4",{className:"player-table-header"},a),l.a.createElement(H.a,{size:"small","aria-label":"simple table"},l.a.createElement(G.a,null,l.a.createElement(M.a,null,l.a.createElement(P.a,null,"Jersey\xa0#"),l.a.createElement(P.a,{align:"right"},"Full\xa0Name"),l.a.createElement(P.a,{align:"right"},"Goals"),l.a.createElement(P.a,{align:"right"},"Shots"),l.a.createElement(P.a,{align:"right"},"Hits"),l.a.createElement(P.a,{align:"right"},"TOI"))),l.a.createElement(I.a,null,t.map((function(e){return l.a.createElement(M.a,{key:e.fullName},l.a.createElement(P.a,{component:"th",scope:"row"},e.jerseyNumber),l.a.createElement(P.a,{align:"right"},e.fullName),l.a.createElement(P.a,{align:"right"},e.goals),l.a.createElement(P.a,{align:"right"},e.shots),l.a.createElement(P.a,{align:"right"},e.hits),l.a.createElement(P.a,{align:"right"},e.timeOnIce))})))))}),z=(t(406),t(437)),A=function(e){var a=e.away,t=e.home,n={backgroundColor:a.color1,borderColor:a.color2},r={backgroundColor:t.color1,borderColor:t.color2};return l.a.createElement(z.a,{position:"fixed",className:"banner-wrapper"},l.a.createElement("header",{className:"banner"},l.a.createElement("div",{className:"banner-team"},l.a.createElement("div",{className:"banner-content banner-away",style:n},l.a.createElement("div",{className:"banner-logo"},l.a.createElement("h2",null,a.teamName),l.a.createElement("img",{src:"".concat(g).concat(a.id,".svg"),alt:"".concat(a.name," Logo")}))),l.a.createElement("div",{className:"banner-goals"},l.a.createElement("h1",null,a.teamSkaterStats.goals))),l.a.createElement("div",{className:"banner-team"},l.a.createElement("div",{className:"banner-goals"},l.a.createElement("h1",null,t.teamSkaterStats.goals)),l.a.createElement("div",{className:"banner-content",style:r},l.a.createElement("div",{className:"banner-logo"},l.a.createElement("img",{src:"".concat(g).concat(t.id,".svg"),alt:"".concat(t.name," Logo")}),l.a.createElement("h2",null,t.teamName))))))},J=(t(407),t(439)),B=function(e){var a=e.play;return l.a.createElement(D.a,{className:"last-play"},a.players&&l.a.createElement(J.a,{src:b+a.players[0].player.id+".jpg",alt:"Player"}),l.a.createElement("p",null,a.result.description," (",a.about.periodTime," ",a.about.ordinalNum,")"))},W=t(438),q=function(e){function a(e){var t;Object(s.a)(this,a);var n=(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).props.match.params.gamePk;return t.state={isLoaded:!1,id:n,home:{},away:{},players:{},plays:{}},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getData(),this.timer=setInterval((function(){return e.getData()}),2e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.timer=null}},{key:"getData",value:function(){var e=this;fetch("".concat("https://react-nhl-server.now.sh","/game/").concat(this.state.id)).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,id:a.id,linescore:a.linescore,home:a.home,away:a.away,players:a.players,plays:a.plays})}))}},{key:"render",value:function(){var e=this.state,a=e.isLoaded,t=e.home,n=e.away,r=e.linescore,c=e.plays,m={backgroundColor:t.color1,borderColor:t.color2},s={backgroundColor:n.color1,borderColor:n.color2};return a?r.currentPeriod>0?l.a.createElement("div",{className:"game-container"},l.a.createElement(A,{away:n,home:t}),l.a.createElement(D.a,{className:"game-time"},l.a.createElement("h3",null,r.currentPeriodOrdinal," - ",r.currentPeriodTimeRemaining)),l.a.createElement(B,{play:c.currentPlay}),l.a.createElement(T,{plays:c.allPlays,away:n,home:t,homeStart:r.periods[0].home.rinkSide}),l.a.createElement("div",{className:"team-tables"},l.a.createElement(R,{name:n.name,data:n.players}),l.a.createElement(R,{name:t.name,data:t.players})),l.a.createElement(o.b,{className:"link back-link",to:"/"},l.a.createElement(W.a,{variant:"contained",size:"large",color:"secondary"},"Home"))):l.a.createElement("div",{className:"not-started-container"},l.a.createElement("h1",null,"This game hasn't started yet ",l.a.createElement("span",{role:"img","aria-label":"face"},"\ud83d\ude11")),l.a.createElement("div",{className:"not-started-teams"},l.a.createElement(D.a,{className:"not-started-half",style:s},l.a.createElement("img",{src:"".concat(g).concat(n.id,".svg"),alt:"".concat(n.name," Logo")})),l.a.createElement("h1",null," at "),l.a.createElement(D.a,{className:"not-started-half",style:m},l.a.createElement("img",{src:"".concat(g).concat(t.id,".svg"),alt:"".concat(t.name," Logo")}))),l.a.createElement(o.b,{className:"link back-link",to:"/"},l.a.createElement(W.a,{variant:"contained",size:"large",color:"secondary"},"Home"))):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"Loading..."))}}]),a}(l.a.Component),K=(t(409),t(410),function(e){var a=e.id,t=e.status,n=e.home,r=e.away,c=t.codedGameState>2&&t.codedGameState<9;return console.log(t.codedGameState),l.a.createElement(o.b,{className:"link",to:"/game/"+a},l.a.createElement(D.a,{className:"card"},l.a.createElement("div",{className:"team"},l.a.createElement("div",{className:"team-description"},l.a.createElement("img",{src:p+r.team.id+".svg",alt:"".concat(r.team.name," Logo")}),l.a.createElement("div",null,l.a.createElement("h2",null,r.team.name),l.a.createElement("p",null,"(",r.leagueRecord.wins,"-",r.leagueRecord.losses,"-",r.leagueRecord.ot,")"))),c&&l.a.createElement("h1",null,r.score)),l.a.createElement("div",{className:"team"},l.a.createElement("div",{className:"team-description"},l.a.createElement("img",{src:p+n.team.id+".svg",alt:"".concat(n.team.name," Logo")}),l.a.createElement("div",null,l.a.createElement("h2",null,n.team.name),l.a.createElement("p",null,"(",n.leagueRecord.wins,"-",n.leagueRecord.losses,"-",n.leagueRecord.ot,")"))),c&&l.a.createElement("h1",null,n.score)),l.a.createElement("h3",null,t.detailedState)))}),_=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={isLoaded:!1,date:"",games:[]},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoaded:!0,date:new Date,games:[]})}},{key:"render",value:function(){var e=this.state,a=e.isLoaded,t=e.date,n=e.games,r=new Date(t),c=y[r.getMonth()],m=String(r.getDate()+1),s=n.map((function(e,a){return l.a.createElement(K,{key:a,id:e.gamePk,status:e.status,home:e.home,away:e.away})}));return a?l.a.createElement("div",{className:"home"},l.a.createElement(D.a,{className:"intro"},l.a.createElement("img",{src:"https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg",alt:"NHL Logo"}),l.a.createElement("h1",null,"Today's Games"),l.a.createElement("h2",null,c," ",m)),l.a.createElement(D.a,{className:"PSA"},l.a.createElement("p",null,"Well... it seems the NHL is going to be on hold for a little while.",l.a.createElement("br",null),"In the meantime, you can check out some examples of this app below."),l.a.createElement("div",{className:"PSA-buttons"},l.a.createElement(o.b,{className:"link back-link",to:"/game/2019020901"},l.a.createElement(W.a,{size:"large",color:"primary"},"Example 1")),l.a.createElement(o.b,{className:"link back-link",to:"/game/2019020342"},l.a.createElement(W.a,{size:"large",color:"primary"},"Example 2")),l.a.createElement(o.b,{className:"link back-link",to:"/game/2019020150"},l.a.createElement(W.a,{size:"large",color:"primary"},"Example 3")))),l.a.createElement("div",{className:"card-list"},l.a.createElement("h3",null,"No games today."),s)):l.a.createElement("div",{className:"loading"},l.a.createElement("h1",null,"Loading..."))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(){return l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/game/:gamePk",component:q}),l.a.createElement(m.a,{path:"/"},l.a.createElement(_,null))))}t.d(a,"default",(function(){return F})),c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[211,1,2]]]);
//# sourceMappingURL=main.4840ef36.chunk.js.map