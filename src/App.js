import './App.css';
import Piano from './components/Piano/Piano';
import Warning from './components/Warning/Warning';
import Interface
  from './components/Interface/Interface';
function App() {
  return (
    <div>
      <Interface width={600} height={100} />
    </div>
  );
}

export default App;
