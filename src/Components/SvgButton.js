import React from 'react'
import styles from './SvgButton.module.css'
// This is a button componenet for svg tag elements
// Use this component by wrappoing a list of path elements (see example in SideBar.js)
function SvgButton(props) {
  return (
      <button className={props.className + " " + styles.svgButton} button_index={props.button_index} onClick={props.onClick}>
          {props.children}
      </button>
  )
}

export default SvgButton