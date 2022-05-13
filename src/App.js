import "./App.css";
import ListAnswers from "./components/ListAnswers";
import listTest1 from "./data/test1.js";
import React, { useEffect, useState, useRef } from "react";
import videoTest2 from "./audio/Test02.mp3";

function App() {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);

  const handleChangeTimeAudio = (x) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
    audioRef.current.play();
  };

  const handlePlayAudio = () => {
    console.log("play audio");
    audioRef.current.play();
  };
  const handlePauseAudio = () => {
    audioRef.current.pause();
    console.log("pause audio");
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 32) {
        handlePauseAudio();
      }
      if (
        event.keyCode === 88 ||
        event.keyCode === 67 ||
        event.keyCode === 66 ||
        event.keyCode === 90 ||
        event.keyCode === 86
      ) {
        handlePlayAudio();
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="left-side">
        <audio
          ref={audioRef}
          id="audio-main"
          autoPlay={true}
          controls={true}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        >
          <source src={videoTest2} type="audio/mp3" />
        </audio>
        <div className="group-btn">
          <button className="btn-stop" onClick={() => audioRef.current.pause()}>
            Stop
          </button>
          <button className="btn-play" onClick={() => audioRef.current.play()}>
            Play
          </button>
        </div>
      </div>
      <div className="list-answers">
        {listTest1.map((ele, index) => (
          <ListAnswers
            key={index}
            ind={index}
            time={ele.time}
            handleChangeTimeAudio={handleChangeTimeAudio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
