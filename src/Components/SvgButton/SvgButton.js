import React from 'react'
import styles from './SvgButton.module.css'
// This is a button componenet for svg tag elements
// Use this component by wrappoing a list of path elements (see example in SideBar.js)
function SvgButton(props) {
  return (
      <button className={props.className + " " + styles.svgButton} button_index={props.button_index} onClick={props.onClick} svg_name={props.svg_name} >
      {/* {props.children} */}
      {/* {React.Children.map(props.children, (child) => {
          if (child.props.className !== "svgButton") return;
          const active = (child.props.active === true) ? styles.active : "";
          return React.cloneElement(child, {
            className: `${child.props.className + " " + active + " " + styles.svgButton}`,
          });
        })} */}
      {
        React.Children.map(props.children, (child) => React.cloneElement(child, {
          viewBox: props.viewBox ? props.viewBox : child.props.viewBox,
          width: props.width ? props.width : child.props.width,
          height: props.height ? props.height : child.props.height,
          svg_name: props.svg_name ? props.svg_name : child.props.svg_name,

        }))
      }
      </button>
  )
}

export default SvgButton