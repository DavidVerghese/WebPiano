import Key from "../Key/Key";
import * as Tone from 'tone';
import './Piano.css';
import { useState, useEffect, useRef } from 'react';
import SelectedScaleDropdown from "../SelectedScaleDropdown/SelectedScaleDropdown";
import SelectedSoundDropdown from "../SelectedSoundDropdown/SelectedSoundDropdown";
import { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian } from "../Scales/Scales";
function Piano({width,height,hideTitle}) {
  const [selectedScale, setSelectedScale] = useState(chromatic);
  const [selectedScaleName, setSelectedScaleName] = useState('chromatic');
  const [selectedSound, setSelectedSound] = useState('default');
  const [selectedNotes, setSelectedNotes] = useState([]);
  let player = useRef(null);
  useEffect(() => {
    player.current = new Tone.Synth().toDestination();
    chromatic.map((note) => setSelectedNotes(current => [...current, note.keystroke]))
  }, [])
    
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    })   
  
console.log(selectedScaleName,selectedScale)
    function handleKeyDown(event) {
      if (event.repeat) {
        return
      }
      if (selectedNotes.includes(event.key)) {
        if (selectedScaleName === 'chromatic') {
          switch (event.key) {
            case "a":
              player.current.triggerAttack(selectedScale[0].note, "+0.02");
              break;
            case "w":
              player.current.triggerAttack(selectedScale[1].note, "+0.03");
              break;
            case "s":
              player.current.triggerAttack(selectedScale[2].note, "+0.04");
              break;  
            case "e":
              player.current.triggerAttack(selectedScale[3].note, "+0.05");
              break;
            case "d":
              player.current.triggerAttack(selectedScale[4].note, "+0.06");
              break;
            case "f":
              player.current.triggerAttack(selectedScale[5].note, "+0.07");
              break;
            case "t":
              player.current.triggerAttack(selectedScale[6].note, "+0.08");
              break;
            case "g":
              player.current.triggerAttack(selectedScale[7].note, "+0.09");
              break;
            case "y":
              player.current.triggerAttack(selectedScale[8].note, "+0.10");
              break;
            case "h":
              player.current.triggerAttack(selectedScale[9].note, "+0.11");
              break;
            case "u":
              player.current.triggerAttack(selectedScale[10].note, "+0.12");
              break;
            case "j":
              player.current.triggerAttack(selectedScale[11].note, "+0.13");
              break;
            case "k":
              player.current.triggerAttack(selectedScale[12].note, "+0.14");
              break;
          }
        }
        else {
          switch (event.key) {
            case "a":
              player.current.triggerAttack(selectedScale[0].note, "+0.02");
              break;
            case "s":
              player.current.triggerAttack(selectedScale[1].note, "+0.04");
              break;  
            case "d":
              player.current.triggerAttack(selectedScale[2].note, "+0.06");
              break;
            case "f":
              player.current.triggerAttack(selectedScale[3].note, "+0.07");
              break;
            case "t":
              player.current.triggerAttack(selectedScale[4].note, "+0.08");
              break;
            case "g":
              player.current.triggerAttack(selectedScale[5].note, "+0.09");
              break;
            case "h":
              player.current.triggerAttack(selectedScale[6].note, "+0.11");
              break;
            case "j":
              player.current.triggerAttack(selectedScale[7].note, "+0.13");
              break;
          }
        }
        
      }
    }
  
    function handleKeyUp(event) {
      switch (event.key) {
        case "a":
          player.current.triggerRelease();
          break;
        case "w":
          player.current.triggerRelease();
          break;
        case "s":
          player.current.triggerRelease();
          break;  
        case "e":
          player.current.triggerRelease();
          break;
        case "d":
          player.current.triggerRelease();
          break;
        case "f":
          player.current.triggerRelease();
          break;
        case "t":
          player.current.triggerRelease();
          break;
        case "g":
          player.current.triggerRelease();
          break;
        case "y":
          player.current.triggerRelease();
          break;
        case "h":
          player.current.triggerRelease();
          break;
        case "u":
          player.current.triggerRelease();
          break;
        case "j":
          player.current.triggerRelease();
          break;
        case "k":
          player.current.triggerRelease();
          break;
      }
  
    }
  
  
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