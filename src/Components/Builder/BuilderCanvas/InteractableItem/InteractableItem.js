import React from 'react'
import styles from './InteractableItem.module.css'
import './resize_drag'
function InteractableItem(props) {
  return (
    // <div>
    //   {console.log(props.children)}
    //   {props.children}
    // </div>
    React.Children.map(props.children, (child) => {
      // console.log(child.props.width_multiplier);
      // console.log(child.props.height_multiplier);
      return React.cloneElement(child, {
        // ref: props.ref_name,
        ...props,
        className: child.className + ' resize_drag ' + styles.interactableItem + " " + props.className,
        preserveAspectRatio: "none",
        // data_x: props.data_x,
        // data_y: props.data_y,
        // data_x: "50px",
        // data_y: "50px",
        // width: props.width,
        // height: props.height,
        // style: props.style
        // planeComponentName:props.planeComponentName,
        // width: "20%",
        // height: "20%",
        // onMouseDownCapture: props.handleDisableCanvasDrag,
        // onMouseUpCapture: props.handleEnableCanvasDrag,
        // onTouchStart: props.handleDisableCanvasDrag,
        // onTouchEnd: props.handleEnableCanvasDrag,
        // onMove: props.handleItemOnMove
      })
    })
  )
}

export default InteractableItem