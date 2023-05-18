import './App.css';
import Piano from './components/Piano/Piano';
import Warning from './components/Warning/Warning';
import Interface
  from './components/Interface/Interface';
import NotePlayer from './components/NotePlayer/NotePlayer';

function App() {
  return (
    <div>
      <Interface width={400} height={40} />
      <NotePlayer note={"C4"} keyToPlay={"a"} />
      <NotePlayer note={"D4"} keyToPlay={"s"} />
      <NotePlayer note={"E4"} keyToPlay={"d"} />
    </div>
  );
}

export default App;
