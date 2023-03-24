import React from "react";
import styles from "./SideBarCollapsed.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// This is a component for the siderbar when it is collapsed. This sidebar will be a collumn of svg buttons
// It's child components are intented to be SvgButton component for proper css styling (see SvgButton.js)
// Use this component by wrapping a list of SvgButton components with a className of svgButton (see Sidebar for implementating example)
function SideBarCollapsed(props) {
  return (
    <nav
      id={styles.sidebarCollapsed}
      className={props.active ? styles.active : ""}
    >
      <Container>
        {React.Children.map(props.children, (child) => {
          const active = child.props.active === true ? styles.active : "";
          return (
            <Row className={styles.row + " mb-3"}>
              {React.cloneElement(child, {
                className:
                  child.props.className + " " + active + " " + styles.svgButton,
              })}
            </Row>
          );
        })}
      </Container>
    </nav>
  );
}

export default SideBarCollapsed;
