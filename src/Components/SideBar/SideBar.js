import React, { useState } from 'react'
import styles from "./SideBar.module.css"
import SideBarExpanded from "./SideBarExpanded/SideBarExpanded";
import SideBarCollapsed from "./SideBarCollapsed/SideBarCollapsed";
import PlaneModulesContent from "./SideBarExpanded/Contents/PlaneModulesContent/PlaneModulesContent";
import SvgButton from '../SvgButton/SvgButton';
import * as Icon from 'react-bootstrap-icons';

// import Button from 'react-bootstrap/Button';
function SideBar(props) {
  const [expandedSiderBar, setExpandedSiderBar] = useState("");
  const handleExpandSideBar = (event) => {
    const button_name = event.target.getAttribute('button_name');
    console.log(event.target)
    if (button_name === expandedSiderBar) setExpandedSiderBar("");
    else setExpandedSiderBar(button_name);
  }
  const handleCollapseSideBar = (event) => {
    setExpandedSiderBar("");
  }
  return (
    <div className={styles.wrapper}>
      <SideBarExpanded
        header="Components"
        active={expandedSiderBar === "Tools" ? true : false}
        onClick={handleCollapseSideBar}>
        <PlaneModulesContent key="1" planeModules={props.planeModules} handleAddInteractableItems={props.handleAddInteractableItems} handleChangeView={props.handleChangeView} view={props.view} />
      </SideBarExpanded>

      <SideBarExpanded
        header="Data"
        active={expandedSiderBar === "Data" ? true : false}
        onClick={handleCollapseSideBar}>
      </SideBarExpanded>

      <SideBarExpanded
        active={expandedSiderBar === "3" ? true : false}
        onClick={handleCollapseSideBar}>
      </SideBarExpanded>

      <SideBarCollapsed active={true}>
        <SvgButton
          button_name="Tools"
          active={expandedSiderBar === "Tools" ? true : false}
          onClick={handleExpandSideBar}>
          <Icon.Tools size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          button_name="Data"
          active={expandedSiderBar === "Data" ? true : false}
          onClick={handleExpandSideBar}>
          <Icon.Table size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="undo"
          onClick={props.handleUndo}>
          <Icon.ArrowCounterclockwise size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="redo"
          onClick={props.handleRedo}>
          <Icon.ArrowClockwise size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="delete"
          onClick={props.handleDelete}>
          <Icon.Trash size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="copy"
          onClick={props.handleCopy}>
          <Icon.Files size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="paste"
          onClick={props.handlePaste}>
          <Icon.Clipboard size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="layer_move_up"
          onClick={props.handleLayerMoveUp}>
          <Icon.LayerForward size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          buttton_name="layer_move_down"
          onClick={props.handleLayerMoveDown}>
          <Icon.LayerBackward size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          button_name="Save"
          className="svgButton"
          onClick={props.handleSave}>
          <Icon.CloudArrowUp size={'1.5rem'} />
        </SvgButton>

        <SvgButton
          button_name="Load"
          onClick={props.handleLoad}>
          <Icon.FileEarmarkArrowDown size={'1.5rem'} />
        </SvgButton>
      </SideBarCollapsed>
    </div>
  )
}

export default SideBar

