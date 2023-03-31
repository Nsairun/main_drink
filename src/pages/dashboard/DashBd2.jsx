import React from 'react';
import './DashBd2.css';

function DashBd2() {
  return (
    <div>
      <form action="">
        <h1> EDIT INGREDIENTS</h1>
        <div className="ingredients-container">
          <ul>
            <li>
              <input type="text" placeholder="Edit ingredients" />
              <button type="submit">+</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default DashBd2;
