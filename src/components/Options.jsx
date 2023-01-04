import React from 'react'

function Options({ currentPressed, setCurrentPressed }) {
  return (
    <div className='options wrapper'>
      {
        ['Materials', 'Slides', 'Quiz', 'Homework'].map((item, idx) => (
          <div
            className={`days ${currentPressed === idx ? 'days-active' : null}`}
            key={idx}
            onClick={() => setCurrentPressed(idx)}
          >
            <h3>{item}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Options