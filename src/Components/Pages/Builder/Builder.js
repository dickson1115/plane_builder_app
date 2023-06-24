import React, { useState, useRef, useEffect } from "react";
import SideBar from "../../SideBar/SideBar";
import BuilderCanvas from "./BuilderCanvas/BuilderCanvas";
import ViewBoard from "./ViewBoard/ViewBoard";
import * as constant from "./planeModules";
import styles from "./Builder.module.css"
import Content from "../Content";
// import svgElements from "./SvgComponenet";
const Builder = () => {
  const planeModules = constant.default;

  // const canvasHeight = 1080;
  // const canvasWidth = 1920;

  const undoStack = useRef([]);
  const redoStack = useRef([]);

  const [interactableItems, setInteractableItems] = useState({
    front_canvas: [],
    side_canvas: [],
    top_canvas: [],
  });

  const [view, setView] = useState("side");

  const canvasSize = {
    front: { width: 1080, height: 1080 },
    side: { width: 1080, height: 1080 },
    top: { width: 1080, height: 1080 },
  };

  const front_canvas_ref = useRef(null);
  const side_canvas_ref = useRef(null);
  const top_canvas_ref = useRef(null);

  const canvasRef = {
    front: front_canvas_ref,
    side: side_canvas_ref,
    top: top_canvas_ref,
  };

  const mousePosition = useRef({ x: null, y: null });
  const mouseDownPosition = useRef({ x: null, y: null });

  const touchEndPosition = useRef({ x: null, y: null });
  const touchStartPosition = useRef({ x: null, y: null });

  const copyItem = useRef(null);

  const handleUpdateUndoStack = () => {
    undoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
  };

  const handleNewAction = () => {
    redoStack.current = [];
  };

  const handleUndo = () => {
    if (undoStack.current.length == 0) return;
    const { view: previousView, interactableItems: previousInteractableItems } =
      undoStack.current.pop();
    handleDeselectItem();
    redoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
    setView(previousView);
    setInteractableItems(previousInteractableItems);
  };

  const handleRedo = () => {
    if (redoStack.current.length == 0) return;
    const { view: nextView, interactableItems: nextInteractableItems } =
      redoStack.current.pop();
    undoStack.current.push({
      view: view,
      interactableItems: interactableItems,
    });
    setView(nextView);
    setInteractableItems(nextInteractableItems);
  };

  const handleChangeView = (event) => {
    handleDeselectItem();
    handleSave();
    const target = event.target;
    setView(target.textContent.toLowerCase());
  };

  const handleAddInteractableItems = (event) => {
    handleUpdateUndoStack();
    handleNewAction();
    const planeModuleButton = event.target;
    const svg_html_element = planeModuleButton.childNodes[0];
    const plane_component_name = planeModuleButton.getAttribute("button_name");
    const viewBox = svg_html_element.getAttribute("viewBox").split(" ");
    const viewBoxWidth = viewBox[2];
    const viewBoxHeight = viewBox[3];
    const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;
    const buttonSize = 200;
    const maxButtonSize = buttonSize * 3;
    let buttonWidth =
      viewBoxAspectRatio > 1 ? viewBoxAspectRatio * buttonSize : buttonSize;
    let buttonHeight = viewBoxAspectRatio < 1 ? buttonSize / viewBoxAspectRatio : buttonSize;
    if (buttonWidth > maxButtonSize) {
      const factor = buttonWidth / maxButtonSize;
      buttonWidth = maxButtonSize;
      buttonHeight /= factor;
    }
    if (buttonHeight > maxButtonSize) {
      const factor = buttonHeight / maxButtonSize;
      buttonHeight = maxButtonSize;
      buttonWidth /= factor;
    }
    const canvas_name = view + "_canvas";
    const data_x = canvasSize[view].width / 2 - buttonWidth / 2;
    const data_y = canvasSize[view].height / 2 - buttonHeight / 2;
    const newPlaneModule = {
      index: interactableItems[canvas_name].length,
      zIndex: interactableItems[canvas_name].length,
      plane_model: planeModuleButton.getAttribute("plane_model"),
      width: buttonWidth,
      height: buttonHeight,
      data_x: data_x,
      data_y: data_y,
      plane_component_name: plane_component_name,
      svg_react_element: planeModules[view][plane_component_name],
      style: {
        transform: `translate(${data_x}px, ${data_y}px)`,
      },
    };
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: [...interactableItems[canvas_name], newPlaneModule],
    });
  };

  const [disableCanvasDrag, setDisableCanvasDrag] = useState(false);

  const handleDisableCanvasDrag = () => {
    return setDisableCanvasDrag(true);
  };

  const handleEnableCanvasDrag = () => {
    setDisableCanvasDrag(false);
  };

  const handleSave = () => {
    if (
      mousePosition.current.x === mouseDownPosition.current.x &&
      mousePosition.current.y === mouseDownPosition.current.y &&
      touchEndPosition.current.x === touchStartPosition.current.x &&
      touchEndPosition.current.y === touchStartPosition.current.y
    ) {
      return;
    }
    handleUpdateUndoStack();
    handleNewAction();

    const canvas_name = view + "_canvas";
    const canvas = canvasRef[view].current;
    const newplaneModules = [];
    Array.from(canvas.children).forEach((child, index) => {
      const plane_component_name = child.getAttribute("plane_component_name");
      const data_x = child.getAttribute("data_x");
      const data_y = child.getAttribute("data_y");
      const styleWidth = child.style.width;
      const styleHeight = child.style.height;
      const planeComponent = {
        index: index,
        zIndex: index,
        model: child.getAttribute("model"),
        width: child.getAttribute("width"),
        height: child.getAttribute("height"),
        data_x: data_x,
        data_y: data_y,
        plane_component_name: plane_component_name,
        svg_react_element: planeModules[view][plane_component_name],
        style: {
          transform: `translate(${data_x}px, ${data_y}px)`,
          width: styleWidth,
          height: styleHeight,
        },
      };
      newplaneModules.push(planeComponent);
    });
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: newplaneModules,
    });
  };

  const handleMouseDownPosition = () => {
    mouseDownPosition.current.x = mousePosition.current.x;
    mouseDownPosition.current.y = mousePosition.current.y;
  };

  const handleTouchStartPosition = (event) => {
    touchStartPosition.current.x = event.changedTouches[0].clientX;
    touchStartPosition.current.y = event.changedTouches[0].clientY;
  };

  const handleTouchEndPosition = (event) => {
    touchEndPosition.current.x = event.changedTouches[0].clientX;
    touchEndPosition.current.y = event.changedTouches[0].clientY;
  };

  const handleMousePosition = (event) => {
    mousePosition.current.x = event.clientX;
    mousePosition.current.y = event.clientY;
  };

  const selectedItemRef = useRef({ view: null, index: null });

  const handleChangeSelectItemStyle = () => {
    if (selectedItemRef.current.view == null) return;
    const canvas = canvasRef[selectedItemRef.current.view].current;
    canvas.children[selectedItemRef.current.index].style.borderColor = "orange";
  };

  const handleSelectItem = (event) => {
    handleDeselectItem();
    selectedItemRef.current.view = view;
    selectedItemRef.current.index = event.target.getAttribute("index");
    const canvas = canvasRef[selectedItemRef.current.view].current;
    canvas.children[selectedItemRef.current.index].style.borderColor = "orange";
  };

  const handleDeselectItem = () => {
    if (selectedItemRef.current.view == null) return;
    const canvas = canvasRef[selectedItemRef.current.view].current;
    canvas.children[selectedItemRef.current.index].style.borderColor =
      "transparent";
    selectedItemRef.current = { view: null, index: null };
  };

  const handleDelete = () => {
    if (selectedItemRef.current.view == null) return;
    const canvas_name = view + "_canvas";
    const planeModules = [];
    const index = selectedItemRef.current.index;
    handleDeselectItem();
    handleUpdateUndoStack();
    interactableItems[canvas_name].forEach((item) => {
      if (item.index == index) return;
      else if (item.index < index) planeModules.push(item);
      else {
        item.index--;
        planeModules.push(item);
      }
    });
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: planeModules,
    });
  };

  const handleLayerMoveUp = () => {
    if (selectedItemRef.current.view == null) return;
    const index = parseInt(selectedItemRef.current.index);
    const canvas_name = view + "_canvas";
    if (index == interactableItems[canvas_name].length - 1) return;
    handleUpdateUndoStack();
    const cloneArray = [...interactableItems[canvas_name]];
    const temp = { ...cloneArray[index] };
    cloneArray[index] = { ...cloneArray[index + 1] };
    cloneArray[index + 1] = temp;
    cloneArray[index].index = index;
    cloneArray[index].zIndex = index;
    cloneArray[index + 1].index = index + 1;
    cloneArray[index + 1].zIndex = index + 1;
    handleDeselectItem();
    selectedItemRef.current = { view: view, index: index + 1 };
    handleChangeSelectItemStyle();
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray });
  };

  const handleLayerMoveDown = () => {
    if (selectedItemRef.current.view == null) return;
    const index = parseInt(selectedItemRef.current.index);
    const canvas_name = view + "_canvas";
    if (index == 0) return;
    handleUpdateUndoStack();
    const cloneArray = [...interactableItems[canvas_name]];
    const temp = { ...cloneArray[index] };
    cloneArray[index] = { ...cloneArray[index - 1] };
    cloneArray[index - 1] = temp;
    cloneArray[index].index = index;
    cloneArray[index].zIndex = index;
    cloneArray[index - 1].index = index - 1;
    cloneArray[index - 1].zIndex = index - 1;
    handleDeselectItem();
    selectedItemRef.current = { view: view, index: index - 1 };
    handleChangeSelectItemStyle();
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray });
  };

  const handleCopy = () => {
    if (selectedItemRef.current.view == null) return;
    const canvas_name = selectedItemRef.current.view + "_canvas";
    const index = parseInt(selectedItemRef.current.index);
    copyItem.current = { ...interactableItems[canvas_name][index] };
  };

  const handlePaste = () => {
    if (view !== selectedItemRef.current.view || copyItem.current == null)
      return;
    const canvas_name = selectedItemRef.current.view + "_canvas";
    handleUpdateUndoStack();
    setInteractableItems({
      ...interactableItems,
      [canvas_name]: [...interactableItems[canvas_name], copyItem.current],
    });
  };

  return (
    <Content>
    <div div className={styles.builderPage}>
      <ViewBoard disableCanvasDrag={disableCanvasDrag}>
        {
          ["front", "side", "top"].map((ele, index) =>
            <BuilderCanvas
              key={index}
              ref={canvasRef[ele]}
              className={ele + "_canvas"}
              id={ele + "_canvas"}
              interactableItems={interactableItems[ele + "_canvas"]}
              canvasHeight={canvasSize[ele].height + "px"}
              canvasWidth={canvasSize[ele].width + "px"}
              display={view == ele}
              handleDisableCanvasDrag={handleDisableCanvasDrag}
              handleEnableCanvasDrag={handleEnableCanvasDrag}
              handleSave={handleSave}
              handleMouseDownPosition={handleMouseDownPosition}
              handleMousePosition={handleMousePosition}
              handleSelectItem={handleSelectItem}
              handleTouchStartPosition={handleTouchStartPosition}
              handleTouchEndPosition={handleTouchEndPosition}
              handleDeselectItem={handleDeselectItem}
            />
          )
        }
      </ViewBoard>
      <SideBar
        planeModules={planeModules}
        view={view}
        handleSave={handleSave}
        handleAddInteractableItems={handleAddInteractableItems}
        handleChangeView={handleChangeView}
        handleRedo={handleRedo}
        handleUndo={handleUndo}
        handleDelete={handleDelete}
        handleLayerMoveUp={handleLayerMoveUp}
        handleLayerMoveDown={handleLayerMoveDown}
        handleCopy={handleCopy}
        handlePaste={handlePaste}
      />


    </div>
         </Content>
  );
};

export default Builder;
