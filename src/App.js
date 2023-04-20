import './App.css';
import * as Tone from 'tone';
import Piano from './components/Piano/Piano';
const useTonePlayer = (note) => {

  const playSound = () => {
    const newPlayer = new Tone.Synth().toDestination();
    newPlayer.triggerAttackRelease(note, "8n");
  };
  return { playSound };
};


function App() {
  const { playSound } = useTonePlayer('C4');
  return (
    <div>
      <Piano/>
      {/* <button onClick={playSound}>Play Sound</button> */}
    </div>
  );
}

export default App;
