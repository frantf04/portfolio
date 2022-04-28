import React from 'react'
import { Link } from 'react-router-dom'
import './css/Button.css'

function Button({ link, text, bg, color, border }) {
  return (
    <>
      <Link style={{ background: bg, color: color, borderColor: border}} className='btn' to={link}> {text} </Link>
    
    </>
  )
}

export default Button
