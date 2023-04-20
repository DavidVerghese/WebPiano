import Key from "../Key/Key";
import './Piano.css';
import { useState } from 'react';
import SelectedScaleDropdown from "../SelectedScaleDropdown/SelectedScaleDropdown";
import SelectedSoundDropdown from "../SelectedSoundDropdown/SelectedSoundDropdown";
import { chromatic, major, minor, pentatonic, blues } from "../Scales/Scales";
function Piano() {
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