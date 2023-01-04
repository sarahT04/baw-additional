import React from 'react'
import Materials from '../components/Materials';
import Quiz from '../components/Quiz';
import Slides from '../components/Slides';
import Wrapper from '../components/Wraper';

const quizBank = [
  { id: 1, question: 'What is the difference of elements inside head and body?', answer: 'Head elements are only for metadata, elements inside body are for website\'s content.' },
  { id: 2, question: 'Explain the concept of parent and child element.', answer: 'Parent element is an html element that wraps other html elements. A child element is the HTML element(s) that are being wrapped by the parent.' },
  { id: 3, question: 'What is HTML attribute?', answer: 'Additional information regarding that HTML element.' },
  { id: 4, question: 'What elements did we learn today?', answer: 'ol, li, h2, p, img, b, i, u, hr, br.' },
  // { id: 1, question: 'What is responsiveness in website?', answer: 'When website automatically change their design to make it look good on all devices' },
]
const materialsBank = [
  { id: 1, href: "https://www.w3schools.com/html/html_basic.asp", title: "w3schools.com", description: "More of HTML basics", },
  { id: 2, href: "https://www.w3schools.com/html/html_formatting.asp", title: "w3schools.com", description: "How to format in HTML", },
  { id: 3, href: "https://www.w3schools.com/html/html_tables.asp", title: "w3schools.com", description: "HTML Table", },
  { id: 4, href: "https://www.w3schools.com/html/html_blocks.asp", title: "w3schools.com", description: "HTML Block vs Inline elements", },
  { id: 5, href: "https://www.w3schools.com/html/html_classes.asp", title: "w3schools.com", description: "HTML Class attribute", },
  { id: 6, href: "https://www.w3schools.com/html/html_id.asp", title: "w3schools.com", description: "HTML ID attribute", },
]

const slidesLink = {
  link: "https://docs.google.com/presentation/d/e/2PACX-1vTik-4xYQF9snLhMCgnAFBsk29CvC2vYFJVFmnDlFAM7Wx3pQJ-FQEHI1jUW_8XG-vOci_KnMbtK_Ok/embed?start=false&loop=false&delayms=3000",
  title: "Day 2 Slides",
}

function Day2() {
  return (
    <Wrapper
      materials={
        <Materials
          activityMaterial={ActivityMaterial}
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

function ActivityMaterial() {
  const activityMaterialsBank = [
    { id: 1, href: '/activityone.html', description: 'Go to activity one', },
    { id: 2, href: '/activitytwo.html', description: 'Go to activity two', },
    { id: 3, href: '/csssnipets.html', description: 'Go see CSS Snippets', },
  ]
  return (
    <>
      <h2 > Activity:</h2 >
      {
        activityMaterialsBank.map((item) => (
          <a href={item.href}>
            <button type="button" className='button'>{item.description} &rarr;</button>
            <br />
          </a>
        ))
      }
    </>
  )
}


function Practice() {
  return (
    <div>
      <h4>My introduction</h4>
      <br />
      <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" style={{ float: 'left', width: '50%' }} alt="stock of a woman" />
      <p style={{ float: 'right', width: '50%', padding: '0 1rem' }}>Hello, my name is <i>y/n</i>. I'm <i>your age</i> years old. This is a picture of me. <br />I like <i>hobbies here</i>. Nice to meet you all.</p>
    </div>
  )
}

function Homework() {
  return (
    <>
      <h2>Homework: Create basic HTML framework of your website.</h2>
      <br />
      <h3>Some hints:</h3>
      <br />
      <ul>
        <li>
          Remember to put {'<!DOCTYPE html> '}.
        </li> <br />
        <li>
          Code a lot so you get comfortable with the syntax. Remember what element uses self-closing tag.
        </li> <br />
        <li>
          The sequence goes from html to head to body. Code is being read from top to bottom, left to right.
        </li> <br />
        <li>
          You can check this website for a quick sneakpeek of HTML + CSS Layouts <a href="https://www.w3schools.com/html/html_layout.asp" title="w3schools.com">https://www.w3schools.com/html/html_layout.asp</a>
        </li> <br />
        <li>
          Some basic elements:
          <ol>
            <li>
              Typography: {'<h1> until <h6>, <p>'}
            </li>
            <li>
              To contain your elements: {'<div>'}
            </li>
            <li>
              Put image: {'<img src="..." />'}
            </li>
            <li>
              Put links to your website: {'<a href="...">'}
            </li>
          </ol>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <h2>Practice: (only do this when you're done with homework above)<br /><br /> Create this layout:</h2>
      <br />
      <Practice />
    </>
  )
}

export default Day2
