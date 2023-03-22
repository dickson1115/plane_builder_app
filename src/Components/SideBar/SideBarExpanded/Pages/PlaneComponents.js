import React, { useState } from 'react'
import styles from './PlaneComponents.module.css'
import svgElements from '../../../SvgButton/SvgComponenet';
import SvgButton from '../../../SvgButton/SvgButton';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function PlaneComponents(props) {
  const buttonHeight = 120;
  const strokeColor = "rgba(0, 0, 0, 0.55)";
  const view = props.view;
  const handleChangeView = props.handleChangeView;
  const [planeModel, setPlaneModel] = useState("");

  const planeComponentsLayoutArray = (planeComponents) => {
    let outterArray = [];
    let innerArray = [];
    Object.entries(planeComponents).forEach((planeComponent, index) => {
      let buttonWidth = "100%"
      const buttonHeight = 50
      const viewBoxArray = planeComponent[1].props.viewBox.split(" ");
      const width = viewBoxArray[2]
      const height = viewBoxArray[3]
      planeComponent[1] = React.cloneElement(planeComponent[1], { height: buttonHeight })
      // console.log(planeComponent[1])
      if (width / height >= 2) {
        outterArray.push([planeComponent])
      }
      else if (innerArray.length == 1) {
        innerArray.push(planeComponent)
        outterArray.push(innerArray)
        innerArray = []
      }
      else {
        innerArray.push(planeComponent)
      }
    })
    if(innerArray.length == 1) outterArray.push(innerArray)
    return outterArray
  }
  return (
    <div>
      <div className={"d-flex justify-content-center m-2"}>

        <ButtonGroup variant="custom" className={styles.btnGroup} role="group" aria-label="Basic example">
          <Button variant="custom" type="button" className={styles.btn + " " + ((view === "side") ? styles.active : "")} onClick={handleChangeView}>Side</Button>
          <Button variant="custom" type="button" className={styles.btn + " " + ((view === "top") ? styles.active : "")} onClick={handleChangeView}>Top</Button>
          <Button variant="custom" type="button" className={styles.btn + " " + ((view === "front") ? styles.active : "")} onClick={handleChangeView}>Front</Button>
        </ButtonGroup>
      </div>



      {/* front */}
      <div className={styles.container + " " + ((view === "front") ? styles.active : "")} >
        {
          planeComponentsLayoutArray(props.planeComponents.front).map((row, index_1) => (
            <Row key={index_1}>
              {row.map(([planeComponent_name, svgElement], index_2) => (
                <Col className="d-flex justify-content-center" key={index_2}>
                  <SvgButton onClick={props.handleAddInteractableItems} button_name={planeComponent_name}>
                    {
                      svgElement
                    }
                    <div>{(() => {
                      
                      const array = planeComponent_name.split("_")
  
                      let displayName = array[0]
                      for (let i = 1; i < array.length - 1; i++){
                        displayName += " " + array[i]
                      }
                      return displayName
                    })()}</div>
                  </SvgButton>
                </Col>
              ))}
            </Row>
          ))
        }
      </div >
            {/* side */}
            <div className={styles.container + " " + ((view === "side") ? styles.active : "")} >
        {
          planeComponentsLayoutArray(props.planeComponents.side).map((row, index_1) => (
            <Row key={index_1}>
              {row.map(([planeComponent_name, svgElement], index_2) => (
                <Col className="d-flex justify-content-center" key={index_2}>
                  <SvgButton onClick={props.handleAddInteractableItems} button_name={planeComponent_name}>
                    {
                      svgElement
                    }
                    <div>{(() => {
                      
                      const array = planeComponent_name.split("_")
  
                      let displayName = array[0]
                      for (let i = 1; i < array.length - 1; i++){
                        displayName += " " + array[i]
                      }
                      return displayName
                    })()}</div>
                  </SvgButton>
                </Col>
              ))}
            </Row>
          ))
        }
      </div >
            {/* top */}
            <div className={styles.container + " " + ((view === "top") ? styles.active : "")} >
        {
          planeComponentsLayoutArray(props.planeComponents.top).map((row, index_1) => (
            <Row key={index_1}>
              {row.map(([planeComponent_name, svgElement], index_2) => (
                <Col className="d-flex justify-content-center" key={index_2}>
                  <SvgButton onClick={props.handleAddInteractableItems} button_name={planeComponent_name}>
                    {
                      svgElement
                    }
                    <div>{(() => {
                      
                      const array = planeComponent_name.split("_")
  
                      let displayName = array[0]
                      for (let i = 1; i < array.length - 1; i++){
                        displayName += " " + array[i]
                      }
                      return displayName
                    })()}</div>
                  </SvgButton>
                </Col>
              ))}
            </Row>
          ))
        }
      </div >
      {/* {
          Object.entries(planeComponents).map(([key, value]) => {
            let buttonWidth = 50
            const buttonHeight = 50
            const viewBoxArray = value.props.viewBox.split(" ");
            const width = viewBoxArray[2]
            const height = viewBoxArray[3]
            if (width / height > 2) {
              buttonWidth *= 2
              return (
                <Row>
                  <Col>
                    <SvgButton button_name={key} width={buttonWidth} height={buttonHeight}>
                      {value}
                      <div>{key.split("_")[0]}</div>
                    </SvgButton>
                  </Col>
                </Row>
              )
            }
            else if (innerArray.length == 2) {
              return (
                <Row>
                  {
                    innerArray.map(({ element, index }) => (
                      <Col>
                        <SvgButton button_name={key} width={buttonWidth} height={buttonHeight}>
                          {value}
                          <div>{key.split("_")[0]}</div>
                        </SvgButton>
                      </Col>
                    ))
                  })
                </Row>
              )
            }
            else {
              innerArray.push(value)
            }
          })} */}
      {/* {
          svgElements.map((element, index) => (
            <SvgButton>
              {element}
            </SvgButton>
          ))
        } */}

      {/* {svgButtonLayoutArray(Object.values(svgElements)).map((row, index) => {
          return <Row key={index}>
            {
              row.map((element, index2) => {
                return (
                  <Col className = "p-0 d-flex justify-content-center">
                    <SvgButton
                      className={"p-1 m-1 " + styles.svgButton}
                      width={element.props.width}
                      height={element.props.height}
                      onClick={props.onClick}
                      svg_name={element.props.name}>
                      {element}
                      <div>{element.props.name.split("_")[0]}</div>
                    </SvgButton>
                  </Col>
                )
              })
            }
          </Row>

        })} */}
      {/* <div className="row">
          <SvgButton className={"front_canvas col " + styles.svgButton} viewBox="0 0 240 50" width="150" onClick={props.onClick} svg_name="wing_front">
            {svgElements.wing_front}
            <div className={styles.title}> Wing </div>
          </SvgButton>
        </div>

        <div className="row">
          <SvgButton className={"front_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="engine_front" >
            {svgElements.engine_front}
            <div className={styles.title}> >ngine </div>
          </SvgButton>
          <SvgButton className={"front_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="wheel_front">
            {svgElements.wheel_front}
            <div className={styles.title}> Wheel </div>
          </SvgButton>
        </div>

        <div className="row h-50" >
          <SvgButton className={"front_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="fuselage_front">
            {svgElements.fuselage_front}
            <div className={styles.title}> Fuselage </div>
          </SvgButton>

          <SvgButton className={"front_canvas col " + styles.svgButton} height="64.67" onClick={props.onClick} svg_name="strut">
            {svgElements.strut}
            <div className={styles.title}> Strut </div>
          </SvgButton>
        </div>
      </div > */}

      {/* side */}
      {/* <div className={styles.container + " " + ((view === "side") ? styles.active : "")} >
        <div className="row">
          <SvgButton className={"side_canvas col " + styles.svgButton} viewBox="0 0 240 50" width="150" onClick={props.onClick} svg_name="wing_front">
            {svgElements.wing_front}
            <div className={styles.title}> Wing </div>
          </SvgButton>
        </div>

        <div className="row">
          <SvgButton className={"side_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="engine_front" >
            {svgElements.engine_front}
            <div className={styles.title}> Engine </div>
          </SvgButton>
          <SvgButton className={"side_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="wheel_front">
            {svgElements.wheel_front}
            <div className={styles.title}> Wheel </div>
          </SvgButton>
        </div>

        <div className="row h-50" >
          <SvgButton className={"side_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="fuselage_front">
            {svgElements.fuselage_front}
            <div className={styles.title}> Fuselage </div>
          </SvgButton>

          <SvgButton className={"side_canvas col " + styles.svgButton} height="64.67" onClick={props.onClick} svg_name="strut">
            {svgElements.strut}
            <div className={styles.title}> Strut </div>
          </SvgButton>
        </div>
      </div > */}

      {/* top */}
      {/* <div className={styles.container + " " + ((view === "top") ? styles.active : "")} >
        <div className="row">
          <SvgButton className={"top_canvas col " + styles.svgButton} viewBox="0 0 240 50" width="150" onClick={props.onClick} svg_name="wing_front">
            {svgElements.wing_front}
            <div className={styles.title}> Wing </div>
          </SvgButton>
        </div>

        <div className="row">
          <SvgButton className={"top_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="engine_front" >
            {svgElements.engine_front}
            <div className={styles.title}> Engine </div>
          </SvgButton>
          <SvgButton className={"top_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="wheel_front">
            {svgElements.wheel_front}
            <div className={styles.title}> Wheel </div>
          </SvgButton>
        </div>

        <div className="row h-50" >
          <SvgButton className={"top_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="fuselage_front">
            {svgElements.fuselage_front}
            <div className={styles.title}> Fuselage </div>
          </SvgButton>

          <SvgButton className={"top_canvas col " + styles.svgButton} height="64.67" onClick={props.onClick} svg_name="strut">
            {svgElements.strut}
            <div className={styles.title}> Strut </div>
          </SvgButton>
        </div>*/}


    </div>
  )
}

export default PlaneComponents