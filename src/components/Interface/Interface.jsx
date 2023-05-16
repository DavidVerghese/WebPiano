import Piano from "../Piano/Piano";
import Warning from "../Warning/Warning";

function Interface({width,height,hideTitle}) {
  return (<div className="interface">
    <Piano width={width} height={height} hideTitle={hideTitle} />
    <Warning/>
  </div>)
}
export default Interface;