import React from "react";
import MealList from "../components/home/MealList";

const Home = ({ mealData, search }) => {
  return (
    <div className="w-4/5">
      <MealList categoryName="popular" mealList={mealData} search={search} />
    </div>
  );
};

export default Home;
