import React from 'react'
import styles from './InteractableItem.module.css'
import './resize_drag'
function InteractableItem(props) {
  return (
    // <div className={"resize_drag " + styles.interactableItem}>
    //   {props.children}
    // </div>
    // <svg fill="red" className={"resize_drag " + styles.interactableItem}  width={props.width} height={props.height} viewBox={props.viewBox} preserveAspectRatio="none">
    // {props.children}
    // </svg>

    React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        className: `${child.className + ' resize_drag ' + styles.interactableItem}`
      })
    })
  )
}

export default InteractableItem