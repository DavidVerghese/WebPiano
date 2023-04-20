import * as Tone from 'tone';
import './Key.css';

const useTonePlayer = (note, sound) => {
  const playSound = () => {
    if (sound === "default") {
      const newPlayer = new Tone.Synth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else if (sound === "am") {
      const newPlayer = new Tone.AMSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else if (sound === "duo") {
      const newPlayer = new Tone.DuoSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else if (sound === "fm") {
      const newPlayer = new Tone.FMSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else if (sound === "membrane") {
      const newPlayer = new Tone.MembraneSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else if (sound === "metal") {
      const newPlayer = new Tone.MetalSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    else {
      const newPlayer = new Tone.MonoSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
  };
  return { playSound };
};

function Key({note, color, sound}) {
  const { playSound } = useTonePlayer(note, sound);
  return (
    <div className="key">
      <button className={color} onClick={playSound}>{note}</button>
    </div>
  );
};
export default Key;