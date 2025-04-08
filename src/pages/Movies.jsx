import React from "react";
import Table from "../components/tables/Table";
import { movieColumns } from "../components/tables/MovieTable";
import moviesData from "../constants/tableData.json";

const Movies = () => {
  return (
    <div className="">
      <Table data={moviesData} columns={movieColumns} onNewItem={"create"}/>
    </div>
  );
};

export default Movies;
