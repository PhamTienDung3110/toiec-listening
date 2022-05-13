import React from "react";
import "../App.css";

function ListAnswers(props) {
  // console.log(props);

  const playAudioWithTime = () => {
    props.handleChangeTimeAudio(props.time);
  };

  return (
    <div onClick={() => playAudioWithTime()} className="answer">
      <p>{props.ind + 1}</p>
    </div>
  );
}

export default ListAnswers;
