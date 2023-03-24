import React from 'react'
import styles from './InteractableItem.module.css'
import './resize_drag'
function InteractableItem(props) {
  return (
    React.Children.map(props.children, (child) => React.cloneElement(child, {
      ...props,
      children: child.props.children,
      className: child.props.className + ' resize_drag ' + styles.interactableItem + " " + props.className,
    })
    )
  )
}

export default InteractableItem