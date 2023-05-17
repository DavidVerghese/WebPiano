import Key from "../Key/Key";
import * as Tone from 'tone';
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
      handleSelectedNoteChange(chromatic);
    }
    else if (event.target.value === "Major") {
      setSelectedScale(major);
      handleSelectedNoteChange(major);
    }
    else if (event.target.value === "Japanese") {
      setSelectedScale(japanese);
      handleSelectedNoteChange(japanese);
    }
    else if (event.target.value === "Major Pentatonic") {
      setSelectedScale(majorPentatonic);
      handleSelectedNoteChange(majorPentatonic);
    }
    else if (event.target.value === "South East Asian") {
      setSelectedScale(southEastAsian);
      handleSelectedNoteChange(southEastAsian);
    }
    else if (event.target.value === "Klezmer") {
      setSelectedScale(klezmer);
      handleSelectedNoteChange(klezmer);
    }
    else if (event.target.value === "Major Blues") {
      setSelectedScale(majorBlues);
      handleSelectedNoteChange(majorBlues);
    }
    else if (event.target.value === "Harmonic Minor") {
      setSelectedScale(harmonicMinor);
      handleSelectedNoteChange(harmonicMinor);
    }
    else if (event.target.value === "Dorian") {
      setSelectedScale(dorian);
      handleSelectedNoteChange(dorian);
    }
    else if (event.target.value === "Mixolodian") {
      setSelectedScale(mixolodian);
      handleSelectedNoteChange(mixolodian);
    }
    else if (event.target.value === "Minor") {
      setSelectedScale(minor);
      handleSelectedNoteChange(minor);
    }
    else if (event.target.value === "Minor Pentatonic") {
      setSelectedScale(minorPentatonic);
      handleSelectedNoteChange(minorPentatonic);
    }
    else {
      setSelectedScale(minorBlues);
      handleSelectedNoteChange(minorBlues);
    }
  };

  function handleSelectedNoteChange(scale) {
    setSelectedNotes([])
    scale.map((note) => setSelectedNotes(current => [...current, note.keystroke]))
  }
  
  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value)
    let sound = event.target.value
    if (sound === "default") {
      player.current = new Tone.Synth().toDestination();
    }
    else if (sound === "am") {
      player.current = new Tone.AMSynth().toDestination();
    }
    else if (sound === "duo") {
      player.current = new Tone.DuoSynth().toDestination();
    }
    else if (sound === "fm") {
      player.current = new Tone.FMSynth().toDestination();
    }
    else if (sound === "membrane") {
      player.current = new Tone.MembraneSynth().toDestination();
    }
    else if (sound === "metal") {
      player.current = new Tone.MetalSynth().toDestination();
    }
    else {
      player.current = new Tone.MonoSynth().toDestination();
    }
  }

  useEffect(() => {
    if (width < 400) {
      console.warn('Warning: The width prop should be at least 400.');
    }
  }, [width]);
  useEffect(() => {
    if (height < 30) {
      console.warn('Warning: The height prop should be at least 30.');
    }
  }, [height]);

  return (
  <div className="piano-parent">
      {!hideTitle && <h2>Piano</h2>}
    <SelectedScaleDropdown handleScaleChange={handleScaleChange} selectedScaleName={selectedScaleName} />
    <SelectedSoundDropdown handleSoundChange={handleSoundChange} selectedSound={selectedSound}/>
    <div className="piano">
      {selectedScale.map((note, key) => <Key sound={selectedSound} key={key} note={note.note} color={note.color} />)}
    </div>
  </div>
  )
}
export default Piano;