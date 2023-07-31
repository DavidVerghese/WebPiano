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
    else {
      const newPlayer = new Tone.MonoSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
    };
  // const playSound = (note, sound) => {
  //   let newPlayer;

  //   switch(sound) {
  //     case "default":
  //       newPlayer = new Tone.Synth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "am":
  //       newPlayer = new Tone.AMSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "duo":
  //       newPlayer = new Tone.DuoSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "fm":
  //       newPlayer = new Tone.FMSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "membrane":
  //       newPlayer = new Tone.MembraneSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     default:
  //       newPlayer = new Tone.MonoSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //   }
  // };
  
    return { playSound };
  };

function Key({note, color, sound, keystrokes}) {
  const { playSound } = useTonePlayer(note, sound);
  return (
    <div className="key">
      <button className={color} onClick={playSound}><div className="key-info"><strong>{note}</strong><em>{keystrokes[0]}</em></div></button>
    </div>
  );
};
export default Key;