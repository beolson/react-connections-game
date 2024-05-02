import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameWonModal({ open, submittedGuesses }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title="You won the game!"
      initiallyOpen={open}
      
      showActionButton={false}
    >

<div className="float-left p-4">
<span className="text-center whitespace-pre">
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span></div>
<p>Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. ...Maybe we can live without libraries, people like you and me. .</p>



    </BaseModal>
  );
}

export default GameWonModal;
