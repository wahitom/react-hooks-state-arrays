import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);

    const newFoodArray = [...foods, newFood];

    setFoods(newFoodArray);
  }

  //filtering through foods
  const [filterBy, setFilterBy] = useState("All");

  //displaying all out filter values
  //filter returns a new array which is a shortened version of
  // for all the elements in the original array where the callback return true, add those elements to the new array
  //if it returns false don't add them

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  //add this function to your select region as an onchange event listener
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
