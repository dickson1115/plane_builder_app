import React from "react";
import styles from "./SvgButton.module.css";
import Button from "react-bootstrap/Button";
// This is a button componenet for svg tag elements
// Use this component by wrappoing a list of path elements (see example in SideBar.js)
function SvgButton(props) {
  return (
    <Button
      variant="custom"
      className={props.className + " p-0 " + styles.svgButton}
      onClick={props.onClick}
      button_name={props.button_name}
    >
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          width: "100%",
        })
      )}
    </Button>
  );
}

export default SvgButton;
