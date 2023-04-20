import Key from "../Key/Key";
import './Piano.css';

function Piano() {
  //const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
  const keys = [
    { note: "C4", color: "white" },
    { note: "C#4", color: "black" },
    { note: "D4", color: "white" },
    { note: "D#4", color: "black" },
    { note: "E4", color: "white" },
    { note: "F4", color: "white" },
    { note: "F#4", color: "black" },
    { note: "G4", color: "white" },
    { note: "G#4", color: "black" },
    { note: "A4", color: "white" },
    { note: "A#4", color: "black" },
    { note: "B4", color: "white" },
    {note: "C5",color: "white"},
  ]
  return (<div className="piano">
    {keys.map((key) => <Key note={key.note} color={key.color} />)}
  </div>)
}
export default Piano;