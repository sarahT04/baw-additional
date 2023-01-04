import React from 'react'
import Slides from '../components/Slides';
import Wrapper from '../components/Wraper';
import Quiz from '../components/Quiz';
import Materials from '../components/Materials';

const quizBank = [
  { id: 1, question: 'What is responsiveness in website?', answer: 'When website automatically change their design to make it look good on all devices' },
  { id: 2, question: 'What is the difference in inline and block elements?', answer: 'Block elements mean they have space between elements, takes all the width, and automatically have new lines. Inline element is the exact opposite.' },
  { id: 3, question: 'What makes websites important?', answer: 'Because websites have a big reach out and can spread information fast.' },
  // { id: 1, question: 'What is responsiveness in website?', answer: 'When website automatically change their design to make it look good on all devices' },
]

const materialsBank = [
  { id: 1, href: "https://www.happiness.com/magazine/personal-growth/seven-ways-to-develop-a-can-do-attitude/", title: "Happiness.com", description: "Can do attitude", },
  { id: 2, href: "https://en.wikipedia.org/wiki/Website", title: "Wikipedia.com", description: "Websites - Wikipedia", },
  { id: 3, href: "https://www.wix.com/blog/2020/12/types-of-websites/", title: "Wix.com", description: "Common types of websites", },
]

const slidesLink = {
  link: "https://docs.google.com/presentation/d/e/2PACX-1vSNEqo43zZh04ZJwUQS-No2nKli0HSTiQk4FJkctbqz_znuCndvvtDLwwHz5ecLuDc9zNMTkNQg9aIX/embed?start=false&loop=false&delayms=3000",
  title: "Day 1 Slides",
}

function Day1() {
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
      <h2>Homework: Have a rough sketch on final project ideas.</h2>
      <br />
      <h3>Some references:</h3>
      <br />
      <ul>
        <li>
          W3  - Common Blog Layout <br />
          <a href='https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog'>https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog</a>
        </li> <br />
        <li>
          Sudut Aman - Articles <br />
          <a href='https://imaginative-hotteok-bd0243.netlify.app/'>https://imaginative-hotteok-bd0243.netlify.app/</a>
        </li> <br />
        <li>
          Starfire Blog - Blog <br />
          <a href="/starfire.html" title="Go to Starfire Blog">
            Press this link
          </a>
        </li>
      </ul><br /><br />
      <h3>Constraints:</h3>
      <br />
      <ul>
        <li>
          Have to use HTML and CSS. JS is optional.
        </li> <br />
        <li>
          Have to use minimum 3 different <a href="https://colorhunt.co/">colors</a>
        </li> <br />
        <li>
          Have to use minimum 1 CSS Layout (Float/Flex)
        </li><br />
        <li>
          Have to have at least 1 image and a Footer that has your name
        </li>
      </ul>
    </>
  )
}

export default Day1
