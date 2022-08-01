import React from "react";
import MealItem from "../components/home/MealItem";

const PopularMovies = ({ mealData, search }) => {
  return (
    <>
      <div className="w-4/5 mt-8">
        <div className="mb-4 font-semibold text-xl uppercase">All Receipt</div>
        <div className="grid grid-cols-6 gap-4">
          {mealData
            .slice(0, 10)
            .filter((meal) => {
              return meal.strCategory.toLowerCase().includes(search);
            })
            .map((meal) => (
              <MealItem key={meal.idCategory} itemMeal={meal} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
