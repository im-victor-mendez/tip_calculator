import React from 'react'
import '../styles/Board.scss'

/* props = id, view */
function Board(props) {
  return (
    <section /*key={props.id}*/ id={props.id} className='board'>
        {props.view}
    </section>
  )
}

export default Board