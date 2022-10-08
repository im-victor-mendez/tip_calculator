import React from 'react'
import '../styles/Board.scss'

/* props = view */
function Board(props) {
  return (
    <section className='board'>
        {props.view}
    </section>
  )
}

export default Board