import './SelectedSoundDropdown.css';

function SelectedSoundDropdown({ handleSoundChange, selectedSound }) {
  const sounds = ['default', 'am', 'duo', 'fm', 'membrane', 'metal', 'mono'];
  return (<>
    <label htmlFor="scale"> Sound: <span className="material-symbols-outlined">piano</span> </label>
    <select id="scale" value={selectedSound} onChange={handleSoundChange}>
      {sounds.map((tone, key) => <option key={key} value={tone}>{tone}</option>)}
    </select>
  </>)
}
export default SelectedSoundDropdown;