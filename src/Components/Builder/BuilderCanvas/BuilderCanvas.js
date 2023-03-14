import React, { useState } from 'react'
import styles from './BuilderCanvas.module.css'
import InteractableItem from './InteractableItem/InteractableItem'
import variables from '../../Variables/globalVariables.sass'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import svgElements from '../../Variables/svgElements'

function BuilderCanvas(props) {


  // function handleMouseMove(event) {
  //   console.log("X: " + event.clientX + "Y: " + event.clientY)
  // }

  return (
    <div className={styles.canvas} >
      {
        props.interactableItems.map((item, index) => {
          const viewBox = item.props.viewBox.split(" ")
          const width = viewBox[2]
          const height = viewBox[3]
          return <InteractableItem onMouseUpCapture={props.onMouseUpCapture} onMouseDownCapture={props.onMouseDownCapture} className={styles.interactableItem} width={width} height={height} key={index} data_x={variables.sideBarWidth} data_y={0}>{item}</InteractableItem>
        })
      }
    </div>
    // <InteractableItem onMouseDown={handleDisableCanvasDrag} >
    //   <svg className="123" fill="currentColor" onMouseDownCapture={handleDisableCanvasDrag} disabled={true} width="300px" height="300px" viewBox="0 0 30 30" >
    //     <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
    //     <rect height="5" width="2" x="16" y="4" />
    //   </svg>
    // </InteractableItem>
    // <div className = "123" onMouseDown={handleDisableCanvasDrag}>testtesttesttesttesttesttesttest</div>
    // <div className={styles.view}>
    //   <TransformWrapper
    //     style={{ width: "100%", height: "100%" }}
    //     initialScale={2}
    //     disabled={disableCanvasDrag}
    //   >
    //     <TransformComponent className={styles.component}>

    //       {/* <svg fill="currentColor" disabled={true} width="30vw" height="30vh" viewBox="0 0 30 30" >
    //       <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
    //       <rect height="5" width="2" x="16" y="4" />
    //     </svg> */}
    //       {/* <div className={styles.builderCanvas}> */}
    //       {/* <div className={styles.easal} > */}
    //       <div className={styles.canvas} onMouseMove={handleMouseMove}>
    //         <InteractableItem onMouseUpCapture={handleEnableCanvasDrag} onMouseDownCapture={handleDisableCanvasDrag} className={styles.interactableItem} width={200} height={200} data_x={"50px"} data_y={0} >
    //           <svg fill="currentColor" disabled={true} width="30vw" height="30vh" viewBox="0 0 30 30" >
    //             <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
    //             <rect height="5" width="2" x="16" y="4" />
    //           </svg>
    //         </InteractableItem>

    //         {
    //           props.interactableItems.map((item, index) => {
    //             const viewBox = item.props.viewBox.split(" ")
    //             const width = viewBox[2] + "px"
    //             const height = viewBox[3] + "px"
    //             return <InteractableItem onMouseUpCapture={handleEnableCanvasDrag} onMouseDownCapture={handleDisableCanvasDrag} className={styles.interactableItem} width={width} height={height} key={index} data_x={variables.sideBarWidth} data_y={0}>{item}</InteractableItem>
    //           })
    //         }
    //       </div>
    //       {/* </div> */}
    //       {/* </div> */}
    //     </TransformComponent>
    //   </TransformWrapper>
    // </div>
  )

}
export default BuilderCanvas