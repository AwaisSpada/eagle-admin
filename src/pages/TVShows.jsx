import React from "react";
import Table from "../components/tables/Table";
import tvShowData from "../constants/tvShowsData.json";
import { tvShowColumns } from "../components/tables/TvShowTable";

const TVShows = () => {
  return (
    <div>
      <Table data={tvShowData} columns={tvShowColumns} onNewItem={"create"} />
    </div>
  );
};

export default TVShows;
