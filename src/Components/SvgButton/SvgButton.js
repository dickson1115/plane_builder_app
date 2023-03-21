import React from 'react'
import styles from './SvgButton.module.css'
import Button from 'react-bootstrap/Button'
// This is a button componenet for svg tag elements
// Use this component by wrappoing a list of path elements (see example in SideBar.js)
function SvgButton(props) {
  return (
      <Button variant= "custom" className={props.className + " p-0 " + styles.svgButton} onClick={props.onClick} button_name={props.button_name} >
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
          // viewBox: props.viewBox ? props.viewBox : child.props.viewBox,
          width: "100%",
          // height: props.height,
          // svg_name: props.svg_name
          // style: props.style

        }))
      }
      </Button>
  )
}

export default SvgButton