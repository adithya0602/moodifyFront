import React from "react";
import './assets/nav.css';
import ReactAudioPlayer from 'react-audio-player';
import jio from './assets/jio.mp3'
import image from './assets/song.png'
import devi from './assets/devi.mp3'
import Hukum from './assets/Hukum.mp3'

class Playlist extends React.Component {
    render() {
        return (
            <>
            <h1 className="li">TOP SONGS OF THE ARTIST</h1>
            <br></br>
            <br></br>
            <h1 className="li">A.R.REHMAN</h1>
            <div className="ji">
               <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
                <div class="container">
                <ReactAudioPlayer
                src={jio}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={jio}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={jio}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={jio}
                controls
                />
                </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="li">DEVI SRI PRASAD</h1>
            <div className="ji">
               <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
                <div class="container">
                <ReactAudioPlayer
                src={devi}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={devi}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={devi}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={devi}
                controls
                />
                </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="li">ANIRUDH RAVICHANDRAN</h1>
            <div className="ji">
               <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
                <div class="container">
                <ReactAudioPlayer
                src={Hukum}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={Hukum}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={Hukum}
                controls
                />
                </div>
                </div> 
                <div class="card">
               <img className="head-phone-img" src={image} alt=""/>
               <br></br>
               <div class="container">
                <ReactAudioPlayer
                src={Hukum}
                controls
                />
                </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </>
        );
    }
}
            
export default Playlist;