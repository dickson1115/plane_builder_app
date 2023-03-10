import {React,useState} from 'react'
import SideBar from '../SideBar/SideBar'
import BuilderCanvas from './BuilderCanvas/BuilderCanvas'
import svgElements from '../Variables/svgElements'
const Builder = () => {
  const [ interactableItems, setInteractableItems ] = useState([
    // svgElements['engine_front'],
    // svgElements['wheel_front'],
  ])

  const addInteractableItems = (event) => {
    const target = event.target;
    const svgElement = svgElements[target.getAttribute('svg_name')];
    setInteractableItems(interactableItems => [...interactableItems, svgElement]);
    // setInteractableItems([...interactableItems,svgElement]);
  }
  return (
    <div>
      <BuilderCanvas interactableItems={interactableItems} />
      <SideBar onClick={addInteractableItems} />
    </div>

  )
}

export default Builder