import React from 'react'
import PlaneComponent from './PlaneComponent'
import Image from '../../Images/front.png'
import SideBar from '../SideBar/SideBar'
const Builder = () => {
  return (
    <div>
      <SideBar />
      <PlaneComponent imagePath={Image} />
    </div>

  )
}

export default Builder