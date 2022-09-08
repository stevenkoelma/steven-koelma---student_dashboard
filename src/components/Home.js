import React from "react";
import Chart from "./Charts/Overview";
import Filter from "./Filter";

const Home = ({ showchart }) => {
  return (
    <>
      <Filter showchart={showchart} />
      <div className="chart">
        <h2>Overzicht</h2>
        <Chart />
      </div>
    </>
  );
};

export default Home;
