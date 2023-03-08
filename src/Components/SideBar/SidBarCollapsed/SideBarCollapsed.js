import React from "react";
import styles from "./SideBarCollapsed.module.css";

// This is a component for the siderbar when it is collapsed. This sidebar will be a collumn of svg buttons
// It's child components are intented to be SvgButton component for proper css styling (see SvgButton.js)
// Use this component by wrapping a list of SvgButton components with a className of svgButton (see Sidebar for implementating example)
function SideBarCollapsed(props) {
  return (
    <nav id={styles.sidebarCollapsed} className={props.active ? styles.active : ""}>
      <div className="row row-cols-1 m-0">
        {React.Children.map(props.children, (child) => {
          if (child.props.className !== "svgButton") return;
          const active = (child.props.active === true) ? styles.active : "";
          return React.cloneElement(child, {
            className: `${child.props.className + " " + active + " " + styles.svgButton}`,
          });
        })}
      </div>
    </nav>
  );
}

export default SideBarCollapsed;
