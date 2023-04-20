import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function SelectedScaleDropdown({ handleScaleChange, selectedScaleName}) {
  const scales = ["Chromatic", "Minor", "Pentatonic", "Blues", "Major"];
  //const [selectedScaleName, setSelectedScaleName] = useState('Chromatic');
  return <>
    <label for="scale"> Scale: <FontAwesomeIcon icon={faMusic} /> </label>
    <select id="scale" value={selectedScaleName} onChange={handleScaleChange}>
      {scales.map((scale, key) => <option value={scale} key={key}>{scale}</option>)}
    </select>
  </>
}
export default SelectedScaleDropdown;