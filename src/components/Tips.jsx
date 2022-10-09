import React from 'react'
import { useDispatch } from 'react-redux'
import { setValue } from '../stateManagement/calculationSlice'
import '../styles/Tips.scss'
import Input from './Input'

const percentages = [5, 10, 15, 25, 50]

/* props = percentage */
function Percentage(props) {
  const dispatch = useDispatch()

  return (
    <input
    type='radio'
    name='input-percentage'
    id={`radio-${props.id}`}
    className='input-percentage'
    value={props.percentage}
    onClick={
      event => dispatch(
        setValue(
          {
            id: 'tip',
            value: event.target.value
          }
        )
      )
    }/>
  )
}

/* props = name */
function Tips(props) {
  return (
    <div id='tips'>
      <h1 id='name'>{props.name}</h1>
      <section id="percentages">
        {
          percentages.map(
            (percentage, i) => <Percentage id={i} key={`key-Percentage-${percentage}`} percentage={percentage} />
          )
        }
        {
          percentages.map(
            (percentage, i) => <label id={`percentage-${i}`} className='percentage' htmlFor={`radio-${i}`}>{percentage}%</label>
          )
        }
        <Input id='tip' type='number' placeholder='Custom' />
      </section>
    </div>
  )
}

export default Tips