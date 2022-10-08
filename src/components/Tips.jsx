import React from 'react'
import '../styles/Tips.scss'
import Input from './Input'

const percentages = [5, 10, 15, 25, 50]

/* props = percentage */
function Percentage(props) {
  return (
    <button className='percentage' value={props.percentage} /*onClick={event => setPercentage(event.target.value)}*/>
        {props.percentage}%
    </button>
  )
}

function Tips() {
  return (
    <div id='tips'>
      {
        percentages.map(
          percentage => <Percentage percentage={percentage} />
        )
      }
      <Input type='number' placeholder='Custom' />
    </div>
  )
}

export default Tips