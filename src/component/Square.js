import React from 'react'

function Square(props) {
  return (
    <div className='square' onClick={props.onClick}>
      <h3>{props.value}</h3>
    </div>
  )
}

export default Square
