import Key from "../Key/Key";
import './Piano.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Piano() {
  //const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
  const chromatic = [
    { note: "C4", color: "white"},
    { note: "C#4", color: "black" },
    { note: "D4", color: "white"},
    { note: "D#4", color: "black" },
    { note: "E4", color: "white"},
    { note: "F4", color: "white"},
    { note: "F#4", color: "black"},
    { note: "G4", color: "white" },
    { note: "G#4", color: "black"},
    { note: "A4", color: "white"},
    { note: "A#4", color: "black"},
    { note: "B4", color: "white" },
    { note: "C5", color: "white" },
  ];
  const major = [
    { note: "C4", color: "gray" },
    { note: "D4", color: "white" },
    { note: "E4", color: "white" },
    { note: "F4", color: "white" },
    { note: "G4", color: "white" },
    { note: "A4", color: "white" },
    { note: "B4", color: "white" },
    { note: "C5", color: "gray" },
  ];
  const minor = [
    { note: "C4", color: "gray" },
    { note: "D4", color: "white" },
    { note: "Eb4", color: "white" },
    { note: "F4", color: "white" },
    { note: "G4", color: "white" },
    { note: "Ab4", color: "white" },
    { note: "Bb4", color: "white" },
    { note: "C5", color: "gray" },
  ];
  const pentatonic = [
    { note: "C4", color: "gray" },
    { note: "Eb4", color: "white" },
    { note: "F4", color: "white" },
    { note: "G4", color: "white" },
    { note: "Bb4", color: "white" },
    { note: "C5", color: "gray" },
  ];
  const blues = [
    { note: "C4", color: "gray" },
    { note: "Eb4", color: "white" },
    { note: "F4", color: "white" },
    { note: "F#4", color: "white" },
    { note: "G4", color: "white" },
    { note: "Bb4", color: "white" },
    { note: "C5", color: "gray" },
  ];
  const [selectedScale, setSelectedScale] = useState(chromatic);
  const [selectedScaleName, setSelectedScaleName] = useState('chromatic');

  const handleScaleChange = (event) => {
    if (event.target.value === "chromatic") {
      setSelectedScale(chromatic);
      setSelectedScaleName('chromatic');
    }
    else if (event.target.value === "major") {
      setSelectedScale(major);
      setSelectedScaleName('major');
    }
    else if (event.target.value === "minor") {
      setSelectedScale(minor);
      setSelectedScaleName('minor');
    }
    else if (event.target.value === "pentatonic") {
      setSelectedScale(pentatonic);
      setSelectedScaleName('pentatonic');
    }
    else {
      setSelectedScale(blues);
      setSelectedScaleName('blues');
    }
  };

  return (<div>
    <h2>Piano</h2>
    <label for="scale"> Scale: <FontAwesomeIcon icon={faMusic} /> </label>
    <select id="scale" value={selectedScaleName} onChange={handleScaleChange}>
      <option value="chromatic">Chromatic</option>
      <option value="minor">Minor</option>
      <option value="pentatonic">Pentatonic</option>
      <option value="blues">Blues</option>
      <option value="major">Major</option>
    </select>
    <div className="piano">
      {selectedScale.map((note, key) => <Key key={key} note={note.note} color={note.color} />)}
    </div>
  </div>)
}
export default Piano;