import React from 'react'
import sunny from './sunny.png'

const Weather = ({name}) => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', height: '200px', width:'300', margin: '50px'}}>
       <h1>
        {name}
       </h1>
    </div>
  )
}

export default Weather
