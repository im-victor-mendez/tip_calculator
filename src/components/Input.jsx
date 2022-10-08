import React from 'react'
import '../styles/Input.scss'

/* props = name, type, icon */
function Input(props) {
  return (
    <div className='input'>
      {
        props.name != undefined ?
        <h1 id='name'>{props.name}</h1> :
        <></>
      }
        <input type={props.type} placeholder={props.placeholder} />
        {
          props.icon != undefined ?
          <i id='icon' className='material-symbols-outlined'>{props.icon}</i> :
          <></>
        }
    </div>
  )
}

export default Input