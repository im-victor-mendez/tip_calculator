import React from 'react'
import '../styles/Input.scss'

/* props = name, type, icon */
function Input(props) {
  return (
    <div className='input'>
        <h1 id='name'>{props.name}</h1>
        <input type={props.type} />
        <i id='icon' className='material-symbols-outlined'>{props.icon}</i>
    </div>
  )
}

export default Input