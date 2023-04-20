import * as Tone from 'tone';
import './Key.css';

const useTonePlayer = (note) => {
  const playSound = () => {
    const newPlayer = new Tone.Synth().toDestination();
    newPlayer.triggerAttackRelease(note, "8n");
  };
  return { playSound };
};

function Key({note, color}) {
  const { playSound } = useTonePlayer(note);
  return (
    <div className="key">
      <button className={color} onClick={playSound}>{note}</button>
    </div>
  );
};
export default Key;