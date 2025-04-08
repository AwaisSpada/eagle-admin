import React from "react";
import directorsData from "../constants/directorsData.json";
import { directorsColumn } from "../components/tables/DirectorsTable";
import Table from "../components/tables/Table";

const Directors = () => {
  return (
    <div>
      <Table data={directorsData} columns={directorsColumn} />
    </div>
  );
};

export default Directors;
