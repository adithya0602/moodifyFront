import { useEffect, useState } from "react";
import './assets/nav.css';


function MainApp({
  mood,
  webCamera,
  audioList,
  apiAudioListCopy,
  prev,
  next,
  playMusic,
  Webcam,
  fetchMusic,
}) {
  const [username, setUsername] = useState("");
  const [firstSongPlayed, setFirstSongPlayed] = useState(false);
  const [moodifyClickCount, setMoodifyClickCount] = useState(0);
  const [youtubeLinks, setYoutubeLinks] = useState([]);

  const generateYoutubeLinks = () => {
    const moodEncoded = encodeURIComponent(`${mood}`);
    const searchQuery = `https://www.youtube.com/results?search_query=${moodEncoded} songs`;
    setYoutubeLinks([searchQuery]);
  };

  const handleFetchYoutubeLinks = () => {
    generateYoutubeLinks();
  };



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.pathname = "/login";
    } else {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  function logout() {
    localStorage.clear();
    window.location.pathname = "/log";
  }

  useEffect(() => {
    if (!firstSongPlayed && apiAudioListCopy.length > 0) {
      playMusic(apiAudioListCopy[0]); // Play the first song
      setFirstSongPlayed(true); // Update state to mark first song played
    }
  }, [apiAudioListCopy, playMusic, firstSongPlayed]);

  const handleMoodifyClick = () => {
    if (moodifyClickCount > 0) {
      window.location.reload();
    } else {
      fetchMusic();
      setMoodifyClickCount(moodifyClickCount + 1);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.pathname = "/login";
    } else {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <>
      {/* songs */}
      <div className="p-4 w-90">
        {/* Search box */}
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">Artists</a>
          <a href="/playlist">Playlists</a>
          <a href="/friends">Friends</a>
          <div onClick={() => logout()}>
                <a href="/log" class="split">{localStorage.getItem("token") && "Logout"}</a>
          </div>
      </div>
      <div>
        <button onClick={handleFetchYoutubeLinks}>
           Visit Youtube playlist of your mood
        </button>
      </div>

      {/* Display generated YouTube links */}
      <div className="youtube-links">
        {youtubeLinks.map((link, index) => (
          <div key={index} className="youtube-link text-center py-2 font-weight-bold">
            <a href={link} target="_blank" rel="noopener noreferrer">playlist of {mood} mood </a>
          </div>
        ))}
      </div>
        <br></br>
        <div>
          <input type="search" placeholder="Search Music (in progress)" />
        </div>

        {/* song squares */}
        <h2 className="mt-5 mb-3">Hi <span className="text-warning" id="username">{username}</span>, listen to this songs</h2>
        <div className="d-flex mt-3 w-100 justify-content-between align-items-center">
          <div className="circle" onClick={() => prev()}>
            <i className="fas fa-arrow-left"></i>
          </div>

          {audioList.map((song) => {
            return (
              <div
                key={song.id}
                className="nav-btn"
                onClick={() => playMusic(song)}
              >
                <div>
                  <img src={song.cover} className="mw-100" alt="song-cover" />
                </div>
                <div>
                  <p>{song.name.slice(0, 15)}</p>
                </div>
              </div>
            );
          })}

          <div className="circle" onClick={() => next()}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* webcam and list */}
        <h2 className="mt-5">Songs based on your mood</h2>
        <div className="d-flex justify-content-between mt-3 w-100">
          {/* list */}
          <div className="list">
            {apiAudioListCopy.map((song) => {
              return (
                <div
                  key={song.id}
                  className="listing text-center py-2 font-weight-bold"
                  onClick={() => playMusic(song)}
                >
                  {song.name.slice(0, 35)}
                </div>
              );
            })}
          </div>

          {/* webcam */}
          <div id="cam-div">
          <button onClick={handleMoodifyClick}>
        {moodifyClickCount > 0 ? "Refresh" : "Moodify"}
      </button>
            <Webcam className="webcam" ref={webCamera} mirrored={true} />
            
          </div>

          {/* mood indicator */}
          <div
            id="mood-div"
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <p className="mb-3">You seem to be</p>
            <p className="font-weight-bold m-0">{mood}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainApp;
