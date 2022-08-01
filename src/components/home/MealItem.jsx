import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ itemMeal }) => {
  let navigate = useNavigate();
  const navigateTo = (destination) => {
    navigate(destination);
  };

  return (
    <div
      className="movieCard rounded-lg shadow-md flex flex-col justify-between hover:scale-105"
      onClick={() => navigate(`/meal/${itemMeal.idMeal}`)}
    >
      <div className="relative h-full">
        <img
          src={`${itemMeal.strMealThumb}`}
          alt="Movie"
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex flex-col justiy-between">
        <button
          className="mt-4 bg-lime-500 text-white p-2 rounded-b-lg"
          onClick={() => navigateTo(`/movie/${itemMeal.idMeal}`)}
        >
          <span> {itemMeal.strMeal} &raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default MealItem;
