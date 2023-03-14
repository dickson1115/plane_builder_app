import React from 'react'
import styles from './InteractableItem.module.css'
import './resize_drag'
function InteractableItem(props) {
  return (
    React.Children.map(props.children, (child) => {
      console.log(child.props.width_multiplier);
      console.log(child.props.height_multiplier);
      return React.cloneElement(child, {
        
        className: child.className + ' resize_drag ' + styles.interactableItem + " " + props.className,
        preserveAspectRatio: "none",
        data_x: props.data_x,
        data_y: props.data_y,
        width: props.width*(child.props.width_multiplier? child.props.width_multiplier:1),
        height: props.height*(child.props.height_multiplier? child.props.height_multiplier:1),
        // width: "20%",
        // height: "20%",
        onMouseDownCapture: props.onMouseDownCapture,
        onMouseUpCapture: props.onMouseUpCapture,
        onTouchStart: props.onMouseDownCapture,
        onTouchEnd: props.onMouseUpCapture,
      })
    })
  )
}

export default InteractableItem