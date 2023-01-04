import React from 'react'
import Slides from '../components/Slides';
import Wrapper from '../components/Wraper';
import Quiz from '../components/Quiz';
import Materials from '../components/Materials';

const quizBank = [
  { id: 1, question: 'What does document.getElementById("idName") do?', answer: 'It finds the HTML element that have id="idName" so we can manipulation with it.' },
  { id: 2, question: 'What is the difference in inline and block elements?', answer: 'Block elements mean they have space between elements, takes all the width, and automatically have new lines. Inline element is the exact opposite.' },
  { id: 3, question: 'What makes websites important?', answer: 'Because websites have a big reach out and can spread information fast.' },
  // { id: 1, question: 'What is responsiveness in website?', answer: 'When website automatically change their design to make it look good on all devices' },
]

const materialsBank = [
  { id: 1, href: "https://www.w3schools.com/js/js_htmldom.asp", title: "w3schools.com", description: "Javascript DOM manipulation", },
]

const slidesLink = {
  link: "https://docs.google.com/presentation/d/e/2PACX-1vSM9Tk3QqL8LyXVGY_nX88sDwPYLvzkgfi9v74iDQDKoje5ZQUrAlBg9lv_e4QgQ5a3BysWTyDEhQ0Y/embed?start=false&loop=false&delayms=3000",
  title: "Day 4 Slides",
}


function Day4() {
  return (
    <Wrapper
      materials={
        <Materials
          materialsBank={materialsBank}
        />
      }
      slides={<Slides
        iframeLink={slidesLink.link}
        iframeTitle={slidesLink.title}
      />}
      quiz={
        <Quiz
          quizBank={quizBank}
        />
      }
      homework={<Homework />}
    />
  )
}


function Homework() {
  return (
    <>
      <h2>Homework: Continue your final project.</h2>
      <br />
      <h5>Javascript is a optional, so feel free to only do HTML & CSS!</h5>
      <h3>Some references:</h3>
      <br />
      <ul>
        <li>
          HTML & CSS Navbar <br />
          <a href='https://www.w3schools.com/css/css_navbar.asp'>https://www.w3schools.com/css/css_navbar.asp</a>
        </li> <br />
        <li>
        HTML & CSS Dropdown <br />
          <a href='https://www.w3schools.com/css/css_dropdowns.asp'>https://www.w3schools.com/css/css_dropdowns.asp</a>
        </li> <br />
        <li>
          HTML & CSS Image Gallery<br />
          <a href='https://www.w3schools.com/css/css_image_gallery.asp'>https://www.w3schools.com/css/css_image_gallery.asp</a>
        </li> <br />
        <li>
          HTML & CSS Fonts<br />
          <a href='https://www.w3schools.com/css/css_font.asp'>https://www.w3schools.com/css/css_font.asp</a>
        </li> <br />
          <li>
          CSS Colors<br />
          <a href='https://colorhunt.co/'>https://colorhunt.co/</a>
        </li> <br />
        <li>
          CSS Transitions <br />
          <a href='https://www.w3schools.com/css/css3_transitions.asp'>https://www.w3schools.com/css/css3_transitions.asp</a>
        </li> <br />
      </ul><br /><br />
    </>
  )
}

export default Day4
