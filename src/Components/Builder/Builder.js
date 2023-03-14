import { React, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import BuilderCanvas from './BuilderCanvas/BuilderCanvas'
import svgElements from '../Variables/svgElements'
import ViewBoard from './ViewBoard'
const Builder = () => {
  const [PlaneComponents, setPlaneComponents] = useState({
    svg_name: "front_wing",
    data_x: "200",
    daya_y: "200",
    width: "200px",
    height: "200px"
  })


  const [interactableItems, setInteractableItems] = useState({
    front_canvas: [],
    side_canvas: [],
    top_canvas: []
  })

  const [view, setView] = useState("front");
  const handleChangeView = (event) => {
    const target = event.target
    setView(target.textContent.toLowerCase())
  }

  const handleAddInteractableItems = (event) => {
    const target = event.target;
    const canvasName = target.getAttribute('class').split(' ')[0];
    const svgElement = svgElements[target.getAttribute('svg_name')];
    setInteractableItems({ ...interactableItems, [canvasName]: [...interactableItems[canvasName], svgElement] });
    // setInteractableItems([...interactableItems,svgElement]);
  }
  return (
    <div className="builderPage" style={{ position: "absolute" }}>
      {/* <div className="viewWindow" style={{ position: "absolute", width: "80vw", height: "80vh", backgroundColor: "rgba(0,0,0,0.3)"}}> */}
      <ViewBoard>
        <BuilderCanvas className="front_canvas" interactableItems={interactableItems.front_canvas} />
      </ViewBoard>

      {/* <BuilderCanvas className="side_canvas" interactableItems={interactableItems.side_canvas} />
        <BuilderCanvas className="top_canvas" interactableItems={interactableItems.top_canvas} /> */}
      <SideBar onClick={handleAddInteractableItems} view={view} handleChangeView={handleChangeView} />
    </div>
    // </div>

  )
}

export default Builder