import React, { useState } from 'react'
import styles from './BuilderCanvas.module.css'
import InteractableItem from '../InteractableItem/InteractableItem'

// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import svgElements from '../../Variables/svgElements'
//import styleVariables from '../../../style.sass'
const BuilderCanvas = React.forwardRef(function BuilderCanvas(props, ref) {
  return (
    <div
      ref={ref}
      className={styles.canvas}
      id={props.id}
      onMouseMove={props.handleMousePosition}
      style={{ height: props.canvasHeight, width: props.canvasWidth, display: (props.display) ? "" : "none" }}
      tabIndex={0}
      onClick={props.handleDeselectItem}
    >
      {
        props.interactableItems.map((item, index) => {
          return (
            <InteractableItem
              onMouseDownCapture={() => { props.handleMouseDownPosition(); props.handleDisableCanvasDrag() }}
              onMouseUpCapture={() => { props.handleEnableCanvasDrag(); props.handleSave() }}
              onTouchStart={(event) => { props.handleTouchStartPosition(event); props.handleDisableCanvasDrag() }}
              onTouchEnd={(event) => { props.handleTouchEndPosition(event); props.handleEnableCanvasDrag(); props.handleEnableCanvasDrag(); props.handleSave() }}
              className={styles.interactableItem}
              plane_component_name={item.plane_component_name}
              width={item.width}
              height={item.height}
              data_x={item.data_x}
              data_y={item.data_y}
              style={item.style}
              key={index}
              index={item.index}
              onClick={(event) => { event.stopPropagation(); props.handleSelectItem(event) }}
              preserveAspectRatio="none"
            >
                {item.svg_react_element}
            </InteractableItem>
          )
        })
      }
    </div>
  )

}
)
export default BuilderCanvas