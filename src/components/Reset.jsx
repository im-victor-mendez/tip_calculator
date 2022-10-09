import React from 'react'
import '../styles/Reset.scss'

function Reset() {
  return (
    <button
    id="reset"
    onClick={
        () => window.location.reload()
    }>
        RESET
    </button>
  )
}

export default Reset