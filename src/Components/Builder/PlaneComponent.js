import React from 'react'

function PlaneComponent({componentCategory, imagePath}) {
  return (
      <div>
          <img src={imagePath} />
          <div>builder</div>
    </div>
  )
}

export default PlaneComponent