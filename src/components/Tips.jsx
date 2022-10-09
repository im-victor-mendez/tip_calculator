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

/* props = name */
function Tips(props) {
  return (
    <div id='tips'>
      <h1 id='name'>{props.name}</h1>
      <section id="percentages">
        {
          percentages.map(
            percentage => <Percentage percentage={percentage} />
          )
        }
        <Input type='number' placeholder='Custom' />
      </section>
    </div>
  )
}

export default Tips