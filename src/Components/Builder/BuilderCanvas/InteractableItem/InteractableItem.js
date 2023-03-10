import React from 'react'
import styles from './InteractableItem.module.css'
import './resize_drag'
function InteractableItem(props) {
  return (
    React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        className: child.className + ' resize_drag ' + styles.interactableItem + " " + props.className,
        data_x: props.data_x,
        data_y: props.data_y,
        test: "t"
        
      })
    })
  )
}

export default InteractableItem