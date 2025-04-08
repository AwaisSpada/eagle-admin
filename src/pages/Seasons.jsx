import React from "react";
import seasonsData from "../constants/seasonsData.json";
import { seasonsTable } from "../components/tables/SeasonsTable";
import Table from "../components/tables/Table";

const Seasons = () => {
  return (
    <div>
      <Table data={seasonsData} columns={seasonsTable} onNewItem={"create"} />
    </div>
  );
};

export default Seasons;
