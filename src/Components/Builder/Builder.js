import React, { useState, useRef, useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import BuilderCanvas from './BuilderCanvas/BuilderCanvas'
import svgElements from '../SvgButton/SvgComponenet'
import ViewBoard from './ViewBoard'
const Builder = () => {
  const [planeComponents, setPlaneComponents] = useState({
    front: {
      engine_front: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
        <ellipse id="shape0" transform="translate(20, 20)" rx="90" ry="90" cx="100" cy="101" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" />
        <ellipse id="shape1" transform="translate(45, 47)" rx="70" ry="70" cx="75" cy="73" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" />
      </svg>,
      wheel_front: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" >
        <path id="shape0" transform="translate(27, 65)" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" d="M55.44 0.36L0 0C0 77.04 0 115.56 0 115.56L54 115.56L54 115.56L54 115.56Z" />
        <path id="shape1" transform="translate(157, 65)" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" d="M2.16 113.04L59.04 113.04L58.68 0L0 0.36L0 112.68" />
        <path id="shape2" transform="translate(84, 108)" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" d="M0 0L70.56 0 " />
        <path id="shape3" transform="translate(84, 142)" strokeWidth="7.2" strokeLinecap="square" strokeLinejoin="bevel" fill="none" d="M0 0L73.8 1.08" />
      </svg>,
      fuselage_front: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" >
        <defs />
        <ellipse id="shape0" transform="translate(7.44, 7.92)" rx="112.32" ry="111.96" cx="112.32" cy="111.96" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" />
        <ellipse id="shape1" transform="translate(74.4, 110.399999760961)" rx="45.6" ry="44.1599968207885" cx="45.6" cy="44.1599968207885" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" />
        <path id="shape2" transform="translate(52.9199982430673, 74.5199975259519)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M0 23.76L13.68 1.08L27 0L67.08 3.96L104.4 0L117 1.08L129.24 21.96L131.04 25.2L101.88 23.04L67.08 27L29.88 23.76C29.88 24 19.92 24 0 23.76Z" />
        <path id="shape3" transform="translate(81.3599972988654, 75.5999974900962)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M0.36 20.88L0 0" />
        <path id="shape4" transform="translate(120, 80.2799973347212)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M0 19.08L0 0" />
        <path id="shape5" transform="translate(155.519994836769, 76.3199974661923)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M0 20.52L1.44 0" />
        <path id="shape6" transform="translate(10.4399996533942, 61.5599979562212)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M17.28 0C15.36 0 21.48 0.36 35.64 1.08C28.68 11.16 22.44 33.36 16.92 67.68L0 66.96C0 61.28 5.76 38.96 17.28 0Z" />
        <path id="shape7" transform="translate(190.799993665481, 60.4799979920769)" fill="none" strokeWidth="6" strokeLinecap="square" strokeLinejoin="bevel" d="M34.2 70.2C33 39.24 27.6 15.84 18 0L0 0C9.36 19.44 15.72 42.6 19.08 69.48Z" />
      </svg>,
      wing_front: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 30" height_multiplier="2" width_multiplier="2" >
        <defs />
        <path id="shape0" transform="translate(10, 6)" fill="none" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" d="M110.171 18.5119L10.157 0.491468L0 0.163823L8.51877 0.163823L110.171 8.84642L204.942 0.163823L215.263 0L205.433 0.491468Z" />
      </svg>,


      strut: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 240" height_multiplier="2" width_multiplier="2" >
        <defs />
        <path id="shape0" transform="translate(15, 20.9252669039146)" fill="none" strokeWidth="9.6" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="2" d="M0 0L0 198.149" />
      </svg >
    },
    side: {
      strut: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 240" height_multiplier="2" width_multiplier="2" >
        <defs />
        <path id="shape0" transform="translate(15, 20.9252669039146)" fill="none" strokeWidth="9.6" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="2" d="M0 0L0 198.149" />
      </svg >
    },
    top: {
      wing_front: < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 30" height_multiplier="2" width_multiplier="2" >
        <defs />
        <path id="shape0" transform="translate(10, 6)" fill="none" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" d="M110.171 18.5119L10.157 0.491468L0 0.163823L8.51877 0.163823L110.171 8.84642L204.942 0.163823L215.263 0L205.433 0.491468Z" />
      </svg>,
    }
  }
  )
  // const [PlaneComponents, setPlaneComponents] = useState({
  //   svg_name: "front_wing",
  //   data_x: "200",
  //   daya_y: "200",
  //   width: "200px",
  //   height: "200px"
  // })  
  const canvasHeight = 1080
  const canvasWidth = 1920

  const undoStack = useRef([])
  const redoStack = useRef([])

  const handleUpdateUndoStack = () => {
    console.log(interactableItems)
    // const clone = require('lodash').cloneDeep( interactableItems )
    // console.log(clone)
    undoStack.current.push(interactableItems)
  }

  const handleNewAction = () => {
    redoStack.current = []
  }
  const handleUndo = () => {
    const previousInteractableItems = undoStack.current.pop()
    if (previousInteractableItems != null) {
      handleDeselectItem()
      selectedItem.current = { view: null, item: null }
      redoStack.current.push(interactableItems)
      setInteractableItems(previousInteractableItems)
    }

  }

  const handleRedo = () => {
    const NextInteractableItems = redoStack.current.pop()
    if (NextInteractableItems != null) {
      undoStack.current.push(interactableItems)
      setInteractableItems(NextInteractableItems)
    }

  }

  const handleRedoStack = () => {
    console.log(document.getElementById("front_canvas").children)
    console.log("save")
  }


  const handleLoad = () => {
    console.log("load")
  }

  const [interactableItems, setInteractableItems] = useState({
    front_canvas: [],
    side_canvas: [],
    top_canvas: []
  })

  const [view, setView] = useState("front");
  const handleChangeView = (event) => {
    const target = event.target
    setView(target.textContent.toLowerCase())
  }

  const handleAddInteractableItems = (event) => {
    handleUpdateUndoStack()
    handleNewAction()
    const svgHtmlElement = event.target.childNodes[0]
    console.log(svgHtmlElement)
    const planeModel = svgHtmlElement.getAttribute("model")
    const plane_component_name = event.target.getAttribute("button_name")
    console.log(plane_component_name)
    const viewBox = svgHtmlElement.getAttribute("viewBox").split(" ")
    console.log(viewBox)
    const width = viewBox[2]
    const height = viewBox[3]
    const aspectRatio = width / height
    const buttonSize = 200
    const maxButtonSize = buttonSize * 3
    let buttonWidth = aspectRatio > 1 ? aspectRatio * buttonSize : buttonSize
    let buttonHeight = aspectRatio < 1 ? buttonSize / aspectRatio : buttonSize
    if (buttonWidth > maxButtonSize) {
      const factor = buttonWidth / maxButtonSize
      buttonWidth = maxButtonSize
      buttonHeight /= factor
    }
    if (buttonHeight > maxButtonSize) {
      const factor = buttonHeight / maxButtonSize
      buttonHeight = maxButtonSize
      buttonWidth /= factor
    }
    const canvas_name = view + "_canvas";
    const data_x = canvasWidth / 2 - buttonWidth / 2
    const data_y = canvasHeight / 2 - buttonHeight / 2
    const planeComponent = {
      index: interactableItems[canvas_name].length,
      zIndex: interactableItems[canvas_name].length,
      model: planeModel,
      width: buttonWidth,
      height: buttonHeight,
      data_x: data_x,
      data_y: data_y,
      plane_component_name: plane_component_name,
      svg: planeComponents[view][plane_component_name],
      style: {
        transform: `translate(${data_x}px, ${data_y}px)`,
        // width: `${buttonWidth}px`,
        // height: `${buttonHeight}px`,

      }

    }
    setInteractableItems({ ...interactableItems, [canvas_name]: [...interactableItems[canvas_name], planeComponent] });
    // setInteractableItems([...interactableItems,svgElement]);
  }

  const [disableCanvasDrag, setDisableCanvasDrag] = useState(false);
  const movePositionRef = useRef({ x: null, y: null })
  // const handleMouseStart = () => {

  // }
  const handleDisableCanvasDrag = () => {
    console.log("disable")
    return setDisableCanvasDrag(true)
  }
  const handleEnableCanvasDrag = () => {
    console.log("enable")
    setDisableCanvasDrag(false)
  }


  const front_canvas = useRef(null)
  const handleSave = () => {
    if (mousePosition.current.x === mouseDownPosition.current.x && mousePosition.current.y === mouseDownPosition.current.y) {
      console.log("same mouse position")
      return
    }
    handleUpdateUndoStack()
    handleNewAction()
    console.log("save")
    console.log(interactableItems)
    const front_children = front_canvas.current.children;
    console.log(front_children)
    const canvas_name = view + "_canvas";
    const planeComponents_front = [];
    const planeComponents_side = [];
    const planeComponents_top = [];

    Array.from(front_children).forEach((child, index) => {
      const plane_component_name = child.getAttribute('plane_component_name')
      const data_x = child.getAttribute('data_x')
      const data_y = child.getAttribute('data_y')
      const styleWidth = child.style.width
      const styleHeight = child.style.height
      const planeComponent = {
        index: index,
        zIndex: index,
        model: child.getAttribute('model'),
        width: child.getAttribute('width'),
        height: child.getAttribute('height'),
        data_x: data_x,
        data_y: data_y,
        plane_component_name: plane_component_name,
        svg: planeComponents[view][plane_component_name],
        style: {
          transform: `translate(${data_x}px, ${data_y}px)`,
          width: styleWidth,
          height: styleHeight,
        }
      }
      planeComponents_front.push(planeComponent)
    })
    console.log(interactableItems)
    const newInteractableItems = {
      ["front_canvas"]: planeComponents_front,
      ["side_canvas"]: planeComponents_side,
      ["top_canvas"]: planeComponents_top
    }
    // if (deepEqual(newInteractableItems,interactableItems)) {
    //   console.log("same")
    // }
    // else {
    //   console.log("different")
    // }

    setInteractableItems(newInteractableItems);

    // setCanvasItems({
    //   front_canvas: planeComponents_front,
    //   side_canvas: planeComponents_side,
    //   top_canvas: planeComponents_top
    // })
  }
  const mousePosition = useRef({ x: null, y: null })
  const mouseDownPosition = useRef({ x: null, y: null })
  const handleMouseDownPosition = () => {
    mouseDownPosition.current.x = mousePosition.current.x
    mouseDownPosition.current.y = mousePosition.current.y
    console.log(mouseDownPosition.current)
  }

  const handleMouseMove = (event) => {
    mousePosition.current.x = event.clientX
    mousePosition.current.y = event.clientY
    // console.log(mousePosition.current)
  }
  useEffect(() => {
    console.log(document.activeElement)
  }, [document.activeElement])

  const selectedItem = useRef({ view: null, index: null })


  const handleChangeSelectItemStyle = () => {
    if (selectedItem.current.view == null) return
    let canvas = null
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas
        break
      case "side":
        break
      case "top":
        break
    }
    console.log(selectedItem.current.index)
    console.log(canvas.current.children[selectedItem.current.index])
    canvas.current.children[selectedItem.current.index].style.borderColor = "orange"
  }
  const handleSelectItem = (event) => {
    handleDeselectItem()
    selectedItem.current.view = view
    selectedItem.current.index = event.target.getAttribute('index')
    let canvas = null
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas
        break
      case "side":
        break
      case "top":
        break
    }
    console.log(event.target.getAttribute('index'))
    console.log(selectedItem.current.index)
    console.log(canvas.current.children[selectedItem.current.index])
    canvas.current.children[selectedItem.current.index].style.borderColor = "orange"
  }

  const handleDeselectItem = () => {
    if (selectedItem.current.view == null) return
    let canvas = null
    switch (selectedItem.current.view) {
      case "front":
        canvas = front_canvas
        break
      case "side":
        break
      case "top":
        break
    }
    canvas.current.children[selectedItem.current.index].style.borderColor = "transparent";
    selectedItem.current = { view: null, index: null }
  }

  const handleDelete = () => {
    if (selectedItem.current.view == null) return
    const canvas_name = view + "_canvas"
    const planeComponents = []
    const index = selectedItem.current.index
    handleDeselectItem()
    handleUpdateUndoStack()
    interactableItems[canvas_name].forEach((item) => {
      if (item.index == index) return
      else if (item.index < index) planeComponents.push(item)
      else {
        item.index--;
        planeComponents.push(item)
      }
    })
    setInteractableItems({ ...interactableItems, [canvas_name]: planeComponents })

  }

  const handleLayerMoveUp = () => {
    if (selectedItem.current.view == null) return
    const index = parseInt(selectedItem.current.index)
    const canvas_name = view + "_canvas"
    if (index == interactableItems[canvas_name].length - 1) return
    handleUpdateUndoStack()
    const cloneArray = [...interactableItems[canvas_name]]
    const temp = { ...cloneArray[index] }
    cloneArray[index] = { ...cloneArray[index + 1] }
    cloneArray[index + 1] = temp
    cloneArray[index].index = index
    cloneArray[index].zIndex = index
    cloneArray[index + 1].index = index + 1
    cloneArray[index + 1].zIndex = index + 1
    // console.log(interactableItems[canvas_name])
    handleDeselectItem()
    selectedItem.current = { view: view, index: index + 1 }
    handleChangeSelectItemStyle()
    console.log(selectedItem.current.index)
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray })

  }

  const handleLayerMoveDown = () => {
    if (selectedItem.current.view == null) return
    const index = parseInt(selectedItem.current.index)
    const canvas_name = view + "_canvas"
    if (index == 0) return
    handleUpdateUndoStack()
    const cloneArray = [...interactableItems[canvas_name]]
    const temp = { ...cloneArray[index] }
    cloneArray[index] = { ...cloneArray[index - 1] }
    cloneArray[index - 1] = temp
    cloneArray[index].index = index
    cloneArray[index].zIndex = index
    cloneArray[index - 1].index = index - 1
    cloneArray[index - 1].zIndex = index - 1
    // console.log(interactableItems[canvas_name])
    handleDeselectItem()
    selectedItem.current = { view: view, index: index - 1 }
    handleChangeSelectItemStyle()
    console.log(selectedItem.current.index)
    setInteractableItems({ ...interactableItems, [canvas_name]: cloneArray })
  }

  const copyItem = useRef(null)
  const handleCopy = () => {
    const canvas_name = selectedItem.current.view+"_canvas"
    const index = parseInt(selectedItem.current.index)
    console.log(canvas_name + " " + index)
    copyItem.current = {...interactableItems[canvas_name][index]}
  }
  const handlePaste = () => {
    if (view !== selectedItem.current.view) return
    console.log("paste")
    const canvas_name = selectedItem.current.view + "_canvas"
    handleUpdateUndoStack()
    setInteractableItems({ ...interactableItems, [canvas_name]: [...interactableItems[canvas_name], copyItem.current ] });
  }
  return (
    <div className="builderPage" style={{ position: "absolute" }}>
      {/* <div className="viewWindow" style={{ position: "absolute", width: "80vw", height: "80vh", backgroundColor: "rgba(0,0,0,0.3)"}}> */}
      <ViewBoard disableCanvasDrag={disableCanvasDrag}>
        <BuilderCanvas
          ref={front_canvas}
          className="front_canvas"
          // handleItemOnMove={handleItemOnMove}
          id="front_canvas"
          interactableItems={interactableItems.front_canvas}
          handleDisableCanvasDrag={handleDisableCanvasDrag}
          handleEnableCanvasDrag={handleEnableCanvasDrag}
          handleSave={handleSave}
          handleMouseDownPosition={handleMouseDownPosition}
          handleMouseMove={handleMouseMove}
          canvasHeight={canvasHeight + "px"}
          canvasWidth={canvasWidth + "px"}
          handleSelectItem={handleSelectItem}

        />
      </ViewBoard>

      {/* <BuilderCanvas className="side_canvas" id="side_canvas" interactableItems={interactableItems.side_canvas} />
        <BuilderCanvas className="top_canvas" id="top_canvas" interactableItems={interactableItems.top_canvas} /> */}
      <SideBar
        handleSave={handleSave}
        planeComponents={planeComponents}
        handleAddInteractableItems={handleAddInteractableItems}
        view={view}
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
    // </div>

  )
}

export default Builder