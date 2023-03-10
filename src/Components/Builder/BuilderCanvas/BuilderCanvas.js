import React, { useState } from 'react'
import styles from './BuilderCanvas.module.css'
import InteractableItem from './InteractableItem/InteractableItem'
import variables from '../../Variables/globalVariables.sass'
// import svgElements from '../../Variables/svgElements'
function BuilderCanvas(props) {
  return (
    <div className={styles.builderCanvas}>
      {
        props.interactableItems.map((item,index) => {
          return <InteractableItem className={styles.interactableItem} key={index} data_x={variables.sideBarWidth} data_y={0}>{item}</InteractableItem>
        })
      }
    </div>

  )
}

export default BuilderCanvas