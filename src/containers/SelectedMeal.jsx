import React, { useEffect, useState } from "react";
import mldbInstance from "../apis/mldb";

const SelectedMovie = () => {
  const [movie, setMovie] = useState([]);
  const url = window.location.href;
  const id = url.split("/meal/")[1];

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await mldbInstance.get(`/lookup.php?i=${id}`);
        // console.log(response.data.meals);
        // const benar = JSON.stringify(response.data.meals, 0, 0);
        var pake = response.data.meals.at(0);

        console.log(pake);
        setMovie(pake);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(id);
  }, [id]);

  return (
    <div className="w-4/5">
      <div className="w-full mt-4 bg-slate-100 flex">
        <img
          className="object-contain  h-30 w-30"
          src={`${movie.strMealThumb}`}
          alt="Placeholder"
        />
        <div className="flex flex-col gap-2 p-4 text-start justify-between">
          <div>
            <div className="text-xl font-semibold">{movie.strMeal}</div>
            <div className="flex flex-col gap-4 align-top">
              <div>{movie.strInstructions}</div>
            </div>
            <div className="text-xl font-semibold">Ingredient</div>
            <div className="text-p">{movie.strIngredient1}</div>
            <div className="text-p">{movie.strIngredient2}</div>
            <div className="text-p">{movie.strIngredient3}</div>
            <div className="text-p">{movie.strIngredient4}</div>
            <div className="text-p">{movie.strIngredient5}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
