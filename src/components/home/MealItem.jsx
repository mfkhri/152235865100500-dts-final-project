import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ itemMeal }) => {
  let navigate = useNavigate();
  const navigateTo = (destination) => {
    navigate(destination);
  };

  return (
    <div
      onClick={() => navigate(`/meal/${itemMeal.idMeal}`)}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img className="rounded-t-lg" src={`${itemMeal.strMealThumb}`} alt="" />

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span> {itemMeal.strMeal} </span>
        </p>
        <button
          onClick={() => navigateTo(`/movie/${itemMeal.idMeal}`)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MealItem;
