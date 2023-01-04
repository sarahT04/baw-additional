import React from 'react'
import Slides from '../components/Slides';
import Wrapper from '../components/Wraper';
import Quiz from '../components/Quiz';
import Materials from '../components/Materials';

const quizBank = [
  { id: 1, question: 'Which is the element that gives you space inside the element? How about outside of the element?', answer: 'Padding gives you space inside the element (uses green color if using debug), margin gives you space outside the element (uses cream color if using debug)' },
  { id: 2, question: 'Why is Flexbox popular to use?', answer: 'Because you can easily set your HTML children in 1 row' },
  { id: 3, question: 'What properties do Flexbox have?', answer: 'There are many, but some example: justify-content, align-items, align-content.' },
  // { id: 1, question: 'What is responsiveness in website?', answer: 'When website automatically change their design to make it look good on all devices' },
]

const materialsBank = [
  { id: 1, href: "https://www.w3schools.com/css/css3_flexbox.asp", title: "w3schools.com", description: "More documentation for Flexbox", },
  { id: 2, href: "https://flexboxfroggy.com/", title: "flexboxfroggy.com", description: "Learn flexbox from games", },
]

const slidesLink = {
  link: "https://docs.google.com/presentation/d/e/2PACX-1vT8na7KcjseUOG_BTMQpzVJ3fvEhCQAEXTRbgCxfRvEZ7SofQ-joNKRBnYpHvuHuoTh79dvzuDM9c6o/embed?start=false&loop=false&delayms=3000",
  title: "Day 3 Slides",
}

function Day3() {
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
      <h2>Homework: Put some CSS to your website.</h2>
      <br />
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
      </ul>
    </>
  )
}

export default Day3
