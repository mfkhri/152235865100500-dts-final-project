import React from "react";
import MealItem from "./MealItem";
import { useNavigate } from "react-router-dom";

const MealList = ({ mealList, categoryName, search }) => {
  let navigate = useNavigate();

  return (
    <>
      <section className="container mt-4 bg-slate-50 p-y-4 shadow-lg">
        <div className="flex justify-between border-b-4  font-semibold text-white ">
          <div className="w-fit px-8 py-2 capitalize rounded-t-lg bg-lime-500">
            {categoryName}
          </div>
        </div>
        <div className="container p-4 grid md:grid-cols-5 sm:grid-cols-2 gap-4 ">
          {mealList
            .slice(0, 5)
            .filter((meal) => {
              return meal.strCategory.toLowerCase().includes(search);
            })
            .map((meal) => (
              <MealItem key={meal.idCategory} itemMeal={meal} />
            ))}
        </div>
        <button
          className="bg-lime-500 text-white w-full text-end py-1 px-2 rounded-lg flex gap-2 content-center capitalize"
          onClick={() => navigate("/all")}
        >
          Show more All Receipt &raquo;
        </button>
      </section>
    </>
  );
};

export default MealList;
