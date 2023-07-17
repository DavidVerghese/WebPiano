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
  }, [])

  useEffect(() => {
    setSelectedSound(localStorage.getItem('selectedSound'))
  }, [selectedSound]);

  useEffect(() => {
    // let selectedScaleNameLocalStorage = localStorage.getItem('selectedScaleName');
    setSelectedScaleName(localStorage.getItem('selectedScaleName'));

    if (selectedScaleName === "Chromatic") {
      setSelectedScale(chromatic);
      handleSelectedNoteChange(chromatic);
    }
    else if (selectedScaleName === "Major") {
      setSelectedScale(major);
      handleSelectedNoteChange(major);
    }
    else if (selectedScaleName === "Japanese") {
      setSelectedScale(japanese);
      handleSelectedNoteChange(japanese);
    }
    else if (selectedScaleName === "Major Pentatonic") {
      setSelectedScale(majorPentatonic);
      handleSelectedNoteChange(majorPentatonic);
    }
    else if (selectedScaleName === "South East Asian") {
      setSelectedScale(southEastAsian);
      handleSelectedNoteChange(southEastAsian);
    }
    else if (selectedScaleName === "Klezmer") {
      setSelectedScale(klezmer);
      handleSelectedNoteChange(klezmer);
    }
    else if (selectedScaleName === "Major Blues") {
      setSelectedScale(majorBlues);
      handleSelectedNoteChange(majorBlues);
    }
    else if (selectedScaleName === "Harmonic Minor") {
      setSelectedScale(harmonicMinor);
      handleSelectedNoteChange(harmonicMinor);
    }
    else if (selectedScaleName === "Dorian") {
      setSelectedScale(dorian);
      handleSelectedNoteChange(dorian);
    }
    else if (selectedScaleName === "Mixolodian") {
      setSelectedScale(mixolodian);
      handleSelectedNoteChange(mixolodian);
    }
    else if (selectedScaleName === "Minor") {
      setSelectedScale(minor);
      handleSelectedNoteChange(minor);
    }
    else if (selectedScaleName === "Minor Pentatonic") {
      setSelectedScale(minorPentatonic);
      handleSelectedNoteChange(minorPentatonic);
    }
    else {
      setSelectedScale(minorBlues);
      handleSelectedNoteChange(minorBlues);
    }
  }, [selectedScaleName]);

  
  
  
    function handleSelectedNoteChange(scale) {
      setSelectedNotes([])
      scale.map((note) => setSelectedNotes(current => [...current, note.keystrokes]))
    }
    
  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value);
    localStorage.setItem('selectedSound', event.target.value);
    window.location.reload(false);
    
      // let sound = event.target.value
      // if (sound === "default") {
      //   player.current = new Tone.Synth().toDestination();
      // }
      // else if (sound === "am") {
      //   player.current = new Tone.AMSynth().toDestination();
      // }
      // else if (sound === "duo") {
      //   player.current = new Tone.DuoSynth().toDestination();
      // }
      // else if (sound === "fm") {
      //   player.current = new Tone.FMSynth().toDestination();
      // }
      // else if (sound === "membrane") {
      //   player.current = new Tone.MembraneSynth().toDestination();
      // }
      // else {
      //   player.current = new Tone.MonoSynth().toDestination();
      // }
    }
  

  const handleScaleChange = (event) => {

    setSelectedScaleName(event.target.value);
    localStorage.setItem('selectedScaleName', event.target.value);

    // if (event.target.value === "Chromatic") {
    //   setSelectedScale(chromatic);
    //   handleSelectedNoteChange(chromatic);
    // }
    // else if (event.target.value === "Major") {
    //   setSelectedScale(major);
    //   handleSelectedNoteChange(major);
    // }
    // else if (event.target.value === "Japanese") {
    //   setSelectedScale(japanese);
    //   handleSelectedNoteChange(japanese);
    // }
    // else if (event.target.value === "Major Pentatonic") {
    //   setSelectedScale(majorPentatonic);
    //   handleSelectedNoteChange(majorPentatonic);
    // }
    // else if (event.target.value === "South East Asian") {
    //   setSelectedScale(southEastAsian);
    //   handleSelectedNoteChange(southEastAsian);
    // }
    // else if (event.target.value === "Klezmer") {
    //   setSelectedScale(klezmer);
    //   handleSelectedNoteChange(klezmer);
    // }
    // else if (event.target.value === "Major Blues") {
    //   setSelectedScale(majorBlues);
    //   handleSelectedNoteChange(majorBlues);
    // }
    // else if (event.target.value === "Harmonic Minor") {
    //   setSelectedScale(harmonicMinor);
    //   handleSelectedNoteChange(harmonicMinor);
    // }
    // else if (event.target.value === "Dorian") {
    //   setSelectedScale(dorian);
    //   handleSelectedNoteChange(dorian);
    // }
    // else if (event.target.value === "Mixolodian") {
    //   setSelectedScale(mixolodian);
    //   handleSelectedNoteChange(mixolodian);
    // }
    // else if (event.target.value === "Minor") {
    //   setSelectedScale(minor);
    //   handleSelectedNoteChange(minor);
    // }
    // else if (event.target.value === "Minor Pentatonic") {
    //   setSelectedScale(minorPentatonic);
    //   handleSelectedNoteChange(minorPentatonic);
    // }
    // else {
    //   setSelectedScale(minorBlues);
    //   handleSelectedNoteChange(minorBlues);
    // }

  };

  // function handleSelectedNoteChange(scale) {
  //   setSelectedNotes([])
  //   scale.map((note) => setSelectedNotes(current => [...current, note.keystrokes]))
  // }
  
 

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