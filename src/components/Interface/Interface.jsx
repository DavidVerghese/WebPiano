import Piano from "../Piano/Piano";
import Warning from "../Warning/Warning";

function Interface({width,height}) {
  return (
    <div className="interface">
      <Piano width={width} height={height} />
      <Warning/>
    </div>)
}
export default Interface;