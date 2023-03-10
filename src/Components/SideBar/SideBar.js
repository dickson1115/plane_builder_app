import React, { useState } from 'react'
import styles from "./SideBar.module.css"
import SideBarExpanded from "./SideBarExpanded/SideBarExpanded";
import SideBarCollapsed from "./SidBarCollapsed/SideBarCollapsed";
import PlaneComponents from "./SideBarExpanded/Pages/PlaneComponents";
import SvgButton from '../SvgButton/SvgButton';
function SideBar(props) {
  const sideBarItems = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const [expandedSiderBar, setExpandedSiderBar] = useState("");
  const handleExpandSideBar = (event) => {
    const button_index = event.target.getAttribute('button_index');
    if (button_index === expandedSiderBar) setExpandedSiderBar("0");
    else setExpandedSiderBar(event.target.getAttribute('button_index'));
  }
  const handleCollapseSideBar = (event) => {
    setExpandedSiderBar("0");
  }

  return (
    <div className={styles.wrapper}>
      <SideBarExpanded active={expandedSiderBar === "1" ? true : false} onClick={handleCollapseSideBar}>
        <PlaneComponents key="1" onClick={props.onClick} />
      </SideBarExpanded>
      <SideBarExpanded active={expandedSiderBar === "2" ? true : false} onClick={handleCollapseSideBar}>
        <PlaneComponents key="2" />
      </SideBarExpanded>
      <SideBarExpanded active={expandedSiderBar === "3" ? true : false} onClick={handleCollapseSideBar}>
        <PlaneComponents key="3" />
      </SideBarExpanded>
      <SideBarCollapsed active={true}>
        <SvgButton button_index="1" className="svgButton" active={expandedSiderBar === "1" ? true : false} onClick={handleExpandSideBar}>
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd"
              d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
            <path
              d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
            </path>
          </svg>
        </SvgButton>
        <SvgButton button_index="2" className="svgButton" active={expandedSiderBar === "2" ? true : false} onClick={handleExpandSideBar}>
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z"></path>
          </svg>
        </SvgButton>

        <SvgButton className="svgButton">
          <svg fill="currentColor" viewBox="0 0 30 30">
            <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
            <rect height="5" width="2" x="16" y="4" />
          </svg>
        </SvgButton>
      </SideBarCollapsed>
    </div>
  )
}

export default SideBar

