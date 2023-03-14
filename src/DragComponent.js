import React from 'react'
import InteractableItem from './Components/Builder/BuilderCanvas/InteractableItem/InteractableItem';
function DragComponent() {
    const handleDrag = (e) => {
        console.log('X: ' + e.clientX + ' Y: ' + e.clientY);
    }
  return (
    // <div draggable onDrag={handleDrag} style={{cursor:"grabbing", backgroundColor: "red", width: "50px", height: "50px"}}></div>
    <InteractableItem><div>test</div></InteractableItem>
  )
}

export default DragComponent