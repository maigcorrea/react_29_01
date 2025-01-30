import React from 'react'
import css from './Hijo.module.css'

const Hijo = ({col}) => {
  return (
    <>
        <div style={col}>
            <h2>Este es un hijo</h2>
            <p>hola</p>
        </div>
    </>
  )
}

export default Hijo