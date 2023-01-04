import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './styles/index.css';
import './styles/days.css';
import App from './App';
import ErrorPage from './error-page';
import Tools from './tools/Tools';
import Day1 from './day1/Day1';
import Day2 from './day2/Day2';
import Day3 from './day3/Day3';
import Day4 from './day4/Day4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tools",
    element: <Tools />
  },
  {
    path: '/day1',
    element: <Day1 />
  },
  {
    path: '/day2',
    element: <Day2 />
  },
  {
    path: '/day3',
    element: <Day3 />
  },
  {
    path: '/day4',
    element: <Day4 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
