import React from 'react'
import styles from './SvgButton.module.css'
// This is a button componenet for svg tag elements
// Use this component by wrappoing a list of path elements (see example in SideBar.js)
function SvgButton(props) {
  return (
      <button className={props.className + " " + styles.svgButton}>
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          className="h-32 w-32 [color]-$fill-color"
          style={{ strokeWidth: "var(--grid-item-icon-stroke-width)", transform: "scale(var(--grid-item-icon-scale))" }}>
          {props.children}
        </svg>
      </button>
  )
}

export default SvgButton