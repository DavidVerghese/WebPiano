import Key from "../Key/Key";
import './Piano.css';
import { useState } from 'react';
import SelectedScaleDropdown from "../SelectedScaleDropdown/SelectedScaleDropdown";
import SelectedSoundDropdown from "../SelectedSoundDropdown/SelectedSoundDropdown";

function Piano() {
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
  const [selectedSound, setSelectedSound] = useState('default');

  const handleScaleChange = (event) => {
    if (event.target.value === "Chromatic") {
      setSelectedScale(chromatic);
      setSelectedScaleName('Chromatic');
    }
    else if (event.target.value === "Major") {
      setSelectedScale(major);
      setSelectedScaleName('Major');
    }
    else if (event.target.value === "Minor") {
      setSelectedScale(minor);
      setSelectedScaleName('Minor');
    }
    else if (event.target.value === "Pentatonic") {
      setSelectedScale(pentatonic);
      setSelectedScaleName('Pentatonic');
    }
    else {
      setSelectedScale(blues);
      setSelectedScaleName('Blues');
    }
  };
  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value)
  }

  return (<div>
    <h2>Piano</h2>
    <SelectedScaleDropdown handleScaleChange={handleScaleChange} selectedScaleName={selectedScaleName} />
    <SelectedSoundDropdown handleSoundChange={handleSoundChange} selectedSound={selectedSound}/>
    <div className="piano">
      {selectedScale.map((note, key) => <Key sound={selectedSound} key={key} note={note.note} color={note.color} />)}
    </div>
  </div>)
}
export default Piano;