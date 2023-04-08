import React, { useContext } from 'react';
import { addDrinks } from '../../api/auth';
import DrinksContext from '../../context/DrinksContext';
import './DashBd1.css';

function DashBd1() {
  const { drinksData } = useContext(DrinksContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // write code...
    const { target } = e;
    const data = {
      name: target.name.value,
      description: target.description.value,
      Image_url: target.Image_url.value,
      glass: target.glass.value,
    };
    await addDrinks(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="drink_container">
          <h1>Edit Drinks</h1>
          <ul>
            <li>
              <input type="text" placeholder="Edit drink name" required />
              <input type="text" placeholder="Edit drink img src" required />
              <input type="text" placeholder="Edit drink desc" required />
              <input type="text" placeholder="Edit glass" required />
              <button type="submit">+</button>
            </li>
          </ul>
        </div>
        <div className="drinks-body">
          {drinksData?.map((drink) => (
            <div className="drink" key={drink.name}>
              <h1> {drink.name} </h1>
              <img src={drink.Image_url} alt="drinks" />
              <p>{drink.description}</p>
              {/* <img src={glass.src} alt="glass" /> */}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default DashBd1;
