//import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setValue } from '../stateManagement/calculationSlice'
import '../styles/Input.scss'

/* props = id (to use in calculationSlice), name, type, placeholder, icon */
function Input(props) {
  //const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  return (
    <div className='input'>
      {
        props.name != undefined ?
        <h1 id='name'>{props.name}</h1> :
        <></>
      }
        <input type={props.type} placeholder={
          props.type == 'number' && props.placeholder == undefined ?
          '0' :
          props.placeholder
        } onChange={
          event => dispatch(
            setValue(
              {
                id: props.id,
                value: event.target.value
              }
            )
          )
        } />
        {
          props.icon != undefined ?
          <i id='icon' className='material-symbols-outlined'>{props.icon}</i> :
          <></>
        }
    </div>
  )
}

export default Input