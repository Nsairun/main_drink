import React from 'react';
import './DashBd1.css';

function DashBd1() {
  return (
    <div>
      <form action="">
        <h1>INGREDIENTS</h1>
        <div>
          <h2>Beer</h2>
          <div>
            <ul>
              <li>
                <input type="text" placeholder="Edit ingredient" />
                <button type="submit">+</button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DashBd1;
