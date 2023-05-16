import Key from "../Key/Key";
import './Piano.css';
import { useState } from 'react';
import SelectedScaleDropdown from "../SelectedScaleDropdown/SelectedScaleDropdown";
import SelectedSoundDropdown from "../SelectedSoundDropdown/SelectedSoundDropdown";
import { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian } from "../Scales/Scales";
function Piano({width,height,hideTitle}) {
  const [selectedScale, setSelectedScale] = useState(chromatic);
  const [selectedScaleName, setSelectedScaleName] = useState('chromatic');
  const [selectedSound, setSelectedSound] = useState('default');

  const handleScaleChange = (event) => {
    setSelectedScaleName(event.target.value)
    if (event.target.value === "Chromatic") {
      setSelectedScale(chromatic);
    }
    else if (event.target.value === "Major") {
      setSelectedScale(major);
    }
    else if (event.target.value === "Japanese") {
      setSelectedScale(japanese);
    }
    else if (event.target.value === "Major Pentatonic") {
      setSelectedScale(majorPentatonic);
    }
    else if (event.target.value === "South East Asian") {
      setSelectedScale(southEastAsian);
    }
    else if (event.target.value === "Klezmer") {
      setSelectedScale(klezmer);
    }
    else if (event.target.value === "Major Blues") {
      setSelectedScale(majorBlues);
    }
    else if (event.target.value === "Harmonic Minor") {
      setSelectedScale(harmonicMinor);
    }
    else if (event.target.value === "Dorian") {
      setSelectedScale(dorian);
    }
    else if (event.target.value === "Mixolodian") {
      setSelectedScale(mixolodian);
    }
    else if (event.target.value === "Minor") {
      setSelectedScale(minor);
    }
    else if (event.target.value === "Minor Pentatonic") {
      setSelectedScale(minorPentatonic);
    }
    else {
      setSelectedScale(minorBlues);
    }
  };
  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value)
  }

  return (
  <div className="piano-parent">
      {!hideTitle && <h2>Piano</h2>}
    <SelectedScaleDropdown handleScaleChange={handleScaleChange} selectedScaleName={selectedScaleName} />
    <SelectedSoundDropdown handleSoundChange={handleSoundChange} selectedSound={selectedSound}/>
    <div className="piano" style={{width:`${width}px`,height:`${height}px`}}>
        {selectedScale.map((note, key) => <Key width={width} sound={selectedSound} key={key} note={note.note} color={note.color} />)}
    </div>
  </div>
  )
}
export default Piano;