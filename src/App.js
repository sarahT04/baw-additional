import React from "react";
import { Link } from "react-router-dom";

const days = [
  { id: 0, day: 'Prerequisite', href: '/tools', title: 'View Prerequisite Material here!' },
  { id: 1, day: 'Day 1', href: '/day1', title: 'View Day 1 Material here!' },
  { id: 2, day: 'Day 2', href: '/day2', title: 'View Day 2 Material here!' },
  { id: 3, day: 'Day 3', href: '/day3', title: 'View Day 3 Material here!' },
  { id: 4, day: 'Day 4', href: '/day4', title: 'View Day 4 Material here!' },
]

function App() {
  return (
    <div id="main-menu">
      <h2>Build a Website</h2>
      <div id="days-wrapper">
        {
          days.map((day) => (
            <Link
              to={day.href}
            >
              <div className="days" title={day.title} key={day.id}>
                <h3>{day.day}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default App;
