import React from 'react'
import PlaneComponent from './PlaneComponent'
import Image from '../../Images/front.png'
import SideBar from '../SideBar/SideBar'
import BuilderCanvas from './BuilderCanvas/BuilderCanvas'
const Builder = () => {
  return (
    <div>
      {/* <PlaneComponent imagePath={Image} /> */}
      <BuilderCanvas />
      <SideBar />
    </div>

  )
}

export default Builder