import React from 'react'
import styles from './SideBarExpanded.module.css'
import SvgButton from '../../SvgButton/SvgButton'

function SideBarExpanded(props) {
  return (
    <nav className={styles.sideBarExpanded + " " + (props.active ? styles.active : "")}>
      <div className="container">
        <div className={styles.headerBar + " row mb-3"}>
          <div className="col p-0 " />
          <div className={" d-flex justify-content-center col p-0 " + styles.sideBarExpandedHeader}>
            <h4>{props.header}</h4>
          </div>
          <div className="col d-flex justify-content-end p-0">
            <div>
              <SvgButton className={styles.svgButton} onClick={props.onClick}>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  className="h-32 w-32 [color]-$fill-color"
                  style={{ strokeWidth: "var(--grid-item-icon-stroke-width)", transform: "scale(var(--grid-item-icon-scale))" }}>
                  <path clipRule="evenodd" fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"></path>
                </svg>
              </SvgButton>
            </div>

          </div>
        </div>
        {props.children}
      </div>
    </nav>
  )
}
//d-flex justify-content-center
export default SideBarExpanded


{/* <svg fill="rgba(0, 0, 0, 0.55)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            className="m-1 h-32 w-32 [color]-$fill-color"
            style={{ strokeWidth: "var(--grid-item-icon-stroke-width)", transform: "scale(var(--grid-item-icon-scale))", width: "75px" }}>
            <path clipRule="evenodd" fillRule="evenodd"
              d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
            <path
              d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
            </path>
          </svg>
        </div>
        <div className="d-flex justify-content-center">
          <svg fill="rgba(0, 0, 0, 0.55)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            className="m-1 h-32 w-32 [color]-$fill-color"
            style={{ strokeWidth: "var(--grid-item-icon-stroke-width)", transform: "scale(var(--grid-item-icon-scale))", width: "75px" }}>
            <path clipRule="evenodd" fillRule="evenodd"
              d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
            <path
              d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
            </path>
          </svg> */}