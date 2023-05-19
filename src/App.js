import './App.css';
import Piano from './components/Piano/Piano';
import Warning from './components/Warning/Warning';
import Interface
  from './components/Interface/Interface';
function App() {
  return (
    <div>
      <h2>Piano</h2>
      <Interface width={400} height={40} />
    </div>
  );
}

export default App;
