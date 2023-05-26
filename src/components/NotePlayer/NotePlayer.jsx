import { useEffect } from 'react';
import * as Tone from 'tone';

function NotePlayer({ note, sound, keyToPlay }) {
  let isPlaying = false;
  useEffect(() => {
    let synth;
    if (sound === "default") {
      synth = new Tone.Synth().toDestination();
    }
    else if (sound === "am") {
      synth = new Tone.AMSynth().toDestination();
    }
    else if (sound === "duo") {
      synth = new Tone.DuoSynth().toDestination();
    }
    else if (sound === "fm") {
      synth = new Tone.FMSynth().toDestination();
    }
    else if (sound === "membrane") {
      synth = new Tone.MembraneSynth().toDestination();
    }
    else if (sound === "metal") {
      synth = new Tone.MetalSynth().toDestination();
    }
    else {
      synth = new Tone.MonoSynth().toDestination();
    }
    
    const handleKeyDown = (event) => {
      if (keyToPlay.includes(event.key) && !isPlaying) {
        synth.triggerAttack(note);
        isPlaying = true;
      }
    };

    const handleKeyUp = (event) => {
      if (keyToPlay.includes(event.key)) {
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
  }, [note, keyToPlay, sound]);

  

}

export default NotePlayer;