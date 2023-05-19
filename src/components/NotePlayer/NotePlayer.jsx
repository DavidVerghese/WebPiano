import React, { useEffect } from 'react';
import * as Tone from 'tone';

function NotePlayer({ note, keyToPlay }) {
  let isPlaying = false;
  useEffect(() => {
    const synth = new Tone.Synth().toDestination();

    const handleKeyDown = (event) => {
      if (event.key === keyToPlay && !isPlaying) {
        synth.triggerAttack(note);
        isPlaying = true;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === keyToPlay) {
        synth.triggerRelease();
        isPlaying = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [note, keyToPlay]);

}

export default NotePlayer;