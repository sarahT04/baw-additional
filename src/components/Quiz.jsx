import React, { useState } from 'react'

function Quiz({ quizBank }) {
    const [seeAnswers, setSeeAnswers] = useState([]);
  
    const setAnswers = (idx) => {
      if (seeAnswers.includes(idx)) {
        setSeeAnswers(seeAnswers.filter((answer) => answer !== idx))
        return;
      }
      setSeeAnswers([...seeAnswers, idx]);
      return;
    }
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        {
          quizBank.map((quiz, idx) => (
            <div key={quiz.id} className="quiz">
              <h3>Q: {quiz.question}</h3>
              {seeAnswers.includes(idx.toString())
                ? <p>A: {quiz.answer}</p>
                : null
              }
              <button onClick={() => setAnswers(idx.toString())}>See answer</button>
            </div>
          ))
        }
      </form>
    )
  }

export default Quiz