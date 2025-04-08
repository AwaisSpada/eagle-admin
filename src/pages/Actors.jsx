import React from "react";
import actorsData from "../constants/actorsData.json";
import { actorsColumn } from "../components/tables/ActorsTable";
import Table from "../components/tables/Table";

const Actors = () => {
  return (
    <div>
      <Table data={actorsData} columns={actorsColumn} />
    </div>
  );
};

export default Actors;
