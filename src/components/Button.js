import React from 'react'

const Button = ({handlerFn,text}) => {
  return (
    <button className='btn-selection' onClick={handlerFn}>{text}</button>
  )
}

export default Button;
