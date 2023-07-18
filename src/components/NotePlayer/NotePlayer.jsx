import { useEffect } from 'react';
import * as Tone from 'tone';

function NotePlayer({ note, sound, keyToPlay }) {
  let isPlaying = false;
  useEffect(() => {
    let synth;

    switch (sound) {
      case "default":
        synth = new Tone.Synth().toDestination();
        break;
      case "am":
        synth = new Tone.AMSynth().toDestination();
        break;
      case "duo":
        synth = new Tone.DuoSynth().toDestination();
        break;
      case "fm":
        synth = new Tone.FMSynth().toDestination();
        break;
      case "membrane":
        synth = new Tone.MembraneSynth().toDestination();
        break;
      default:
        synth = new Tone.MonoSynth().toDestination();
        break;
    };
    
    const handleKeyDown = (event) => {
      event.preventDefault();
      if (keyToPlay.includes(event.key) && !isPlaying) {
        synth.triggerAttackRelease(note, '1n');
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