import React, { useState } from "react";
import styles from "./PlaneModulesContent.module.css";
import SvgButton from "../../../../SvgButton/SvgButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

// import svgElements from '../../../Builder/SvgComponenet';
function PlaneModulesPage(props) {
  // const [planeModel, setPlaneModel] = useState("");
  const buttonHeight = "3rem";
  const view = props.view;
  const handleChangeView = props.handleChangeView;
  const mapPlaneModulesLayout = (planeModulesInView) => {
    let outterArray = [];
    let innerArray = [];
    Object.entries(planeModulesInView).forEach(
      (planeModulesInViewEntry, index) => {
        // const buttonHeight = 50
        const viewBoxArray =
          planeModulesInViewEntry[1].props.viewBox.split(" ");
        const viewBoxWidth = viewBoxArray[2];
        const viewBoxHeight = viewBoxArray[3];
        planeModulesInViewEntry[1] = React.cloneElement(
          planeModulesInViewEntry[1],
          { height: buttonHeight }
        );
        if (viewBoxWidth / viewBoxHeight >= 2) {
          outterArray.push([planeModulesInViewEntry]);
        } else if (innerArray.length == 1) {
          innerArray.push(planeModulesInViewEntry);
          outterArray.push(innerArray);
          innerArray = [];
        } else {
          innerArray.push(planeModulesInViewEntry);
        }
      }
    );
    if (innerArray.length == 1) outterArray.push(innerArray);
    return outterArray;
  };

  return (
    <div>
      <div className={"d-flex justify-content-center m-2"}>
        <ButtonGroup
          variant="custom"
          className={styles.btnGroup}
          role="group"
          aria-label="Basic example"
        >
          {["front", "side", "top"].map((ele, index) => (
            <Button
              key={index}
              variant="custom"
              type="button"
              className={
                styles.btn + " " + (view === ele ? styles.active : "")
              }
              onClick={handleChangeView}
            >
              {ele}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      {["front", "side", "top"].map((ele, index) => (
        <div
          className={
            styles.container + " " + (view === ele ? styles.active : "")
          }
        >
          {mapPlaneModulesLayout(props.planeModules[ele]).map(
            (row, index_1) => (
              <Row key={index_1}>
                {row.map(([plane_module_name, svg_react_element], index_2) => (
                  <Col
                    className="d-flex justify-content-center p-1"
                    key={index_2}
                  >
                    <SvgButton
                      onClick={props.handleAddInteractableItems}
                      button_name={plane_module_name}
                    >
                      {svg_react_element}
                      <div>
                        {(() => {
                          const plane_module_name_array =
                            plane_module_name.split("_");
                          let displayName = plane_module_name_array[0];
                          for (let i = 1; i < plane_module_name_array.length - 1; i++) {
                            displayName += " " + plane_module_name_array[i];
                          }
                          return displayName;
                        })()}
                      </div>
                    </SvgButton>
                  </Col>
                ))}
              </Row>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default PlaneModulesPage;
