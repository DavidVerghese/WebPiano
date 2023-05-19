import './App.css';
import Piano from './components/Piano/Piano';
import Warning from './components/Warning/Warning';
import Interface
  from './components/Interface/Interface';
import NotePlayer from './components/NotePlayer/NotePlayer';
import { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian } from "./components/Scales/Scales";

function App() {
  return (
    <div>
      <Interface hideTitle={true} width={400} height={40} />
      {/* {chromatic.map((note)=><NotePlayer note={note.note} keyToPlay={note.keystroke} />)} */}
      {/* <NotePlayer note={"C4"} keyToPlay={"a"} />
      <NotePlayer note={"D4"} keyToPlay={"s"} />
      <NotePlayer note={"E4"} keyToPlay={"d"} /> */}
    </div>
  );
}

export default App;
