import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Main from "./container/Main";
import { getCurrentWeather, getDailyWeather } from "./redux/actions/action";
import { useAppDispatch } from "./redux/store/store";

import "./styles/global.scss";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getDailyWeather());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
