import React from 'react';
import './DashBd2.css';

function DashBd2() {
  return (
    <div className="drinksEdit">
      <form action="">
        <h1>DRINKS EDIT</h1>
        <div>
          <ul>
            <li>
              <input type="text" placeholder="Edit drinks" />
              <button type="submit">+</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default DashBd2;
