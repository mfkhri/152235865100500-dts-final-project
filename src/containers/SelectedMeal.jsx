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
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={`${movie.strMealThumb}`}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              FOOD NAME
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {movie.strMeal}
            </h1>

            <p class="leading-relaxed">{movie.strInstructions}</p>
            <div className="text-xl font-semibold">Ingredient</div>
            <div className="text-p">{movie.strIngredient1}</div>
            <div className="text-p">{movie.strIngredient2}</div>
            <div className="text-p">{movie.strIngredient3}</div>
            <div className="text-p">{movie.strIngredient4}</div>
            <div className="text-p">{movie.strIngredient5}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedMovie;
