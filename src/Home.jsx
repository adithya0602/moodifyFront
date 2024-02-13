import React from "react";
import HeadPhone from './assets/headphones.svg';
import './assets/Login.scss';
import {Link} from "react-router-dom";

class Home extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Emotion Based Music and Youtube Playlist Recommendation</h1>
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/log"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Home;