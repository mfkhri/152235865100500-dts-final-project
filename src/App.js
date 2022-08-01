import "./App.css";
import React, { useEffect, useState } from "react";
import mldbInstance from "./apis/mldb";
import { Routes, Route } from "react-router-dom";

// Partial Component
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";
import Footer from "./containers/Footer";
import ProtectedComponent from "./components/app/ProtectedComponent";

// Container Component
import Home from "./containers/Home";
import AllMeal from "./containers/AllMeal";
import SelectedMeal from "./containers/SelectedMeal";
import LoginOrRegister from "./containers/LoginOrRegister";
import Missing from "./components/app/Missing";
import Denied from "./components/app/Denied";
import Profile from "./components/user/Profile";

function App() {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (query) => {
    setSearch(query);
  };
  useEffect(() => {
    const fetchDataMeal = async () => {
      try {
        const responseDariTMDB = await mldbInstance.get("/search.php?f=b");
        setMeal(responseDariTMDB.data.meals);
        console.log(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMeal();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Header search={search} searchHandler={searchHandler} />
      <main className="w-full  min-h-screen pt-2 pb-2 flex justify-center">
        <Routes>
          <Route path="/" element={<Home mealData={meal} search={search} />} />
          <Route
            path="/meal/:id"
            element={
              <ProtectedComponent>
                <SelectedMeal />
              </ProtectedComponent>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedComponent>
                <Profile />
              </ProtectedComponent>
            }
          />
          <Route
            path="/all"
            element={<AllMeal mealData={meal} search={search} />}
          />
          <Route
            path="/login"
            element={<LoginOrRegister loginOrRegister="login" />}
          />
          <Route
            path="/signup"
            element={<LoginOrRegister loginOrRegister="register" />}
          />
          <Route path="/denied" element={<Denied />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
