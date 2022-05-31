import React  from 'react'

const Button = ({styleButton, icon, clickButton}) => {
  return (
    <button style={styleButton} className='button' onClick={clickButton}> 
      <i className='icon'>{icon} a</i>
    </button>
  )
}

export default Button