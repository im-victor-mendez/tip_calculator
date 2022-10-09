import { useDispatch } from 'react-redux'
import { setValue } from '../stateManagement/calculationSlice'
import '../styles/Input.scss'

/* props = id (to use in calculationSlice), name, type, placeholder, icon */
function Input(props) {
  const dispatch = useDispatch()

  return (
    <div className='input'>
      {
        props.name != undefined ?
        <h1 id='name'>{props.name}</h1> :
        <></>
      }

      <input
        id={`input-${props.id}`}
        type={props.type}
        min={
          props.id == 'numberOfPeople' ?
          1 : 0
        }
        required={
          props.id == 'numberOfPeople' ?
          true : false
        }
        placeholder={
          props.type == 'number' && props.placeholder == undefined ?
          '0' :
          props.placeholder
        }
        onChange={
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