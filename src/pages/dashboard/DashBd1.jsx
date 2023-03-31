import React from 'react';
import './DashBd1.css';

function DashBd1() {
  return (
    <div>
      <form action="">
        <div className="drink-container">
          <h1>Edit Drinks</h1>
          <ul>
            <li>
              <input type="text" placeholder="Edit drink" />
              <button type="submit">+</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default DashBd1;
