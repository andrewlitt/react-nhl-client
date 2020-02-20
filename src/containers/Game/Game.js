import React from 'react';
import './Game.css'
import RinkChart from '../../components/RinkChart/RinkChart';
import {LOGO_URL, PLAYER_URL} from '../../constants';
import { Link } from 'react-router-dom';
const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload[0]);
    if (payload[1]) {
      return (
        <div className="tooltip">
          <img src={PLAYER_URL+payload[1].payload.playerID+'.jpg'} />
          <p className="label">{payload[1].payload.name}</p>
        </div>
      );
    }
  
    return null;
  };

class Game extends React.Component {
    
    constructor(props){
        super(props);
        const { gamePk } = this.props.match.params;
        this.state = {
            isLoaded: false,
            id: gamePk,
            home: {},
            away: {},
            players: {},
            plays: {},
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8000/game/${this.state.id}`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                id: result.id,
                linescore: result.linescore,
                home: result.home,
                away: result.away,
                players: result.players,
                plays: result.plays
            })
            }
        )
    }

    getCoords(teamID, playType, plays){
        const validPlays = plays.filter(play => {
            if(play.coordinates.x && play.team.id == teamID && play.result.eventTypeId === playType){
                return play;
            }
        });
        const coords = validPlays.map(play => {
            var mult = ((play.about.period == 2) ? '-1' : '1');
            if(this.state.linescore.periods[0].home.rinkSide =="left") mult = -1*mult;
            return { name: play.result.description, playerID: play.players[0].player.id,x: mult*play.coordinates.x, y: mult*play.coordinates.y}
        });
        return coords;
    }
    
    render(){
            let currentPlay = this.state.plays.currentPlay;
            if(this.state.isLoaded){
                return(
                    <div className="game-container">
                        <Link className ="link backLink" to={'/'}>
                            <p className="back">Home</p>
                        </Link>
                        <div className="game-time"><h3>{this.state.linescore.currentPeriodOrdinal} - {this.state.linescore.currentPeriodTimeRemaining}</h3></div>
                        <div className='teams'>
                            <div className='team-line'>
                                <div className='team-line-group'>
                                    <img src= {`${LOGO_URL}${this.state.away.id}.svg`}/>
                                    <h2>{this.state.away.teamName}</h2>
                                </div>
                                <h1>{this.state.linescore.teams.away.goals}</h1>
                            </div>
                            <div className='team-line'>
                                <div className='team-line-group'>
                                    <img src={`${LOGO_URL}${this.state.home.id}.svg`}/>
                                    <h2>{this.state.home.teamName}</h2>
                                </div>
                                <h1>{this.state.linescore.teams.home.goals}</h1>
                            </div>    
                        </div>
                        <h3 className="">Last Play</h3>  
                        <div className="last-play">
                            {currentPlay.players && <img src={PLAYER_URL+currentPlay.players[0].player.id+'.jpg'}/> } 
                            <p>{currentPlay.result.description} ({currentPlay.about.periodTime} {currentPlay.about.ordinalNum})</p>
                        </div>

                        <RinkChart plays={this.state.plays.allPlays} away={this.state.away} home={this.state.home} homeStart = {this.state.linescore.periods[0].home.rinkSide}/>
                    </div>
                )
            }
            return(<h1>Loading...</h1>);
           
        }
    }

export default Game;