import React from 'react'
import './index.css'

import DestinationSearch from '../DestinationSearch'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className='destination-item'>
      <img src={imgUrl} alt={name} className='destination-image' />
      <p className='destination-name'>{name}</p>
    </li>
  )
}

export default DestinationItem
