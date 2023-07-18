import Key from "../Key/Key";
import * as Tone from 'tone';
import './Piano.css';
import { useState, useEffect, useRef } from 'react';
import SelectedScaleDropdown from "../SelectedScaleDropdown/SelectedScaleDropdown";
import SelectedSoundDropdown from "../SelectedSoundDropdown/SelectedSoundDropdown";
import { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian } from "../Scales/Scales";
import NotePlayer from '../NotePlayer/NotePlayer';

function Piano({width,height}) {
  const [selectedScale, setSelectedScale] = useState(chromatic);
  const [selectedScaleName, setSelectedScaleName] = useState('chromatic');
  const [selectedSound, setSelectedSound] = useState('default');
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [defaultHeight, setDefaultHeight] = useState('100px');
  const [defaultWidth, setDefaultWidth] = useState('600px');

  let player = useRef(null);

  useEffect(() => {
    player.current = new Tone.Synth().toDestination();
    chromatic.map((note) => setSelectedNotes(current => [...current, note.keystrokes]))
  }, []);

  useEffect(() => {
    setSelectedSound(localStorage.getItem('selectedSound'))
  }, [selectedSound]);

  useEffect(() => {
    setSelectedScaleName(localStorage.getItem('selectedScaleName'));

    switch (selectedScaleName) {
      case "Chromatic":
        setSelectedScale(chromatic);
        handleSelectedNoteChange(chromatic);
        break;
      case "Major":
        setSelectedScale(major);
        handleSelectedNoteChange(major);
        break;
      case "Japanese":
        setSelectedScale(japanese);
        handleSelectedNoteChange(japanese);
        break;
      case "Major Pentatonic":
        setSelectedScale(majorPentatonic);
        handleSelectedNoteChange(majorPentatonic);
        break;
      case "South East Asian":
        setSelectedScale(southEastAsian);
        handleSelectedNoteChange(southEastAsian);
        break;
      case "Klezmer":
        setSelectedScale(klezmer);
        handleSelectedNoteChange(klezmer);
        break;
      case "Major Blues":
        setSelectedScale(majorBlues);
        handleSelectedNoteChange(majorBlues);
        break;
      case "Harmonic Minor":
        setSelectedScale(harmonicMinor);
        handleSelectedNoteChange(harmonicMinor);
        break;
      case "Dorian":
        setSelectedScale(dorian);
        handleSelectedNoteChange(dorian);
        break;
      case "Mixolodian":
        setSelectedScale(mixolodian);
        handleSelectedNoteChange(mixolodian);
        break;
      case "Minor":
        setSelectedScale(minor);
        handleSelectedNoteChange(minor);
        break;
      case "Minor Pentatonic":
        setSelectedScale(minorPentatonic);
        handleSelectedNoteChange(minorPentatonic);
        break;
      default:
        setSelectedScale(minorBlues);
        handleSelectedNoteChange(minorBlues);
        break;
    };
  }, [selectedScaleName]);

  function handleSelectedNoteChange(scale) {
    setSelectedNotes([])
    scale.map((note) => setSelectedNotes(current => [...current, note.keystrokes]))
  };
    
  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value);
    localStorage.setItem('selectedSound', event.target.value);
    window.location.reload(false);
  };
  

  const handleScaleChange = (event) => {
    setSelectedScaleName(event.target.value);
    localStorage.setItem('selectedScaleName', event.target.value);
  };

  useEffect(() => {
    if (width < 400) {
      console.warn('Warning: The width prop should be at least 400.');
    }
  }, [width]);

  useEffect(() => {
    if (height < 40) {
      console.warn('Warning: The height prop should be at least 40.');
    }
  }, [height]);

  return (
  <div className="piano-parent">
    <SelectedScaleDropdown handleScaleChange={handleScaleChange} selectedScaleName={selectedScaleName} />
    <SelectedSoundDropdown handleSoundChange={handleSoundChange} selectedSound={selectedSound}/>
    <div className="piano" style={{width: width && width >= 400 ? `${width}px` : defaultWidth,height: height && height >= 40 ? `${height}px` : defaultHeight }}>
      {selectedScale.map((note, key) => <Key sound={localStorage.getItem('selectedSound')} key={key} keystrokes={note.keystrokes} note={note.note} color={note.color} />)}
    </div>
      {selectedScale.map((note, key) => <NotePlayer key={key} sound={selectedSound} note={note.note} keyToPlay={note.keystrokes} />)}
  </div>
  )
}
export default Piano;