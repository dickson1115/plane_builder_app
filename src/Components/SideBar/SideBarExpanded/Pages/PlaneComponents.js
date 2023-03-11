import { React, useState } from 'react'
import styles from './PlaneComponents.module.css'
import svgElements from '../../../Variables/svgElements';
import SvgButton from '../../../SvgButton/SvgButton';
function PlaneComponents(props) {
  const strokeColor = "rgba(0, 0, 0, 0.55)";
  const view = props.view;
  const handleChangeView = props.handleChangeView;
  return (
    <div>
      <div className={"d-flex justify-content-center m-2"}>
        <div className={"btn-group " + styles.btnGroup} role="group" aria-label="Basic example">
          <button type="button" className={"btn " + styles.btn + " " + ((view === "side") ? styles.active : "")} onClick={handleChangeView}>Side</button>
          <button type="button" className={"btn " + styles.btn + " " + ((view === "top") ? styles.active : "")} onClick={handleChangeView}>Top</button>
          <button type="button" className={"btn " + styles.btn + " " + ((view === "front") ? styles.active : "")} onClick={handleChangeView}>Front</button>
        </div>
      </div>

      {/* front */}
      <div className={styles.container + " " + ((view === "front") ? styles.active : "")} >
        <div className="row">
          <SvgButton className={"front_canvas col " + styles.svgButton} viewBox="0 0 240 50" width="150" onClick={props.onClick} svg_name="wing_front">
            {svgElements.wing_front}
            <div className={styles.title}> Wing </div>
          </SvgButton>
        </div>

        <div className="row">
          <SvgButton className={"front_canvas col " + styles.svgButton} onClick={props.onClick} svg_name="engine_front" >
            {svgElements.engine_front}
            <div className={styles.title}> Engine </div>
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
      </div >

      {/* side */}
      <div className={styles.container + " " + ((view === "side") ? styles.active : "")} >
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
      </div >

      {/* top */}
      <div className={styles.container  + " " + ((view==="top") ? styles.active:"")} >
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
        </div>
      </div >




    </div>
  )
}

export default PlaneComponents