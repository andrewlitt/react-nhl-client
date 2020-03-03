import React from 'react';
import './TeamBanner.css'
import { LOGO_URL } from '../../constants';


const TeamBanner = ({ away, home }) => {

    const awayStyle = {
        backgroundColor: away.color1,
        borderColor: away.color2
    }
    const homeStyle = {
        backgroundColor: home.color1,
        borderColor: home.color2
    }
    return (
        <header className ='banner'>
            <div className='banner-team'>
                <div className='banner-content banner-away' style={awayStyle}>
                    <div className='banner-logo'>
                        <h2>{away.teamName}</h2>
                        <img src= {`${LOGO_URL}${away.id}.svg`}/>
                    </div>
                </div>
                <div className='banner-goals'>
                    <h1>{away.teamSkaterStats.goals}</h1>
                </div>
            </div>
            <div className='banner-team'>
                <div className='banner-goals'>
                    <h1>{home.teamSkaterStats.goals}</h1>
                </div>
                <div className='banner-content' style={homeStyle}>
                    <div className='banner-logo'>
                        <img src={`${LOGO_URL}${home.id}.svg`}/>
                        <h2>{home.teamName}</h2>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TeamBanner;