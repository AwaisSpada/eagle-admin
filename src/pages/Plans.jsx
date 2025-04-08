import React from "react";
import plansData from "../constants/plansData.json";
import { plansColumns } from "../components/tables/PlansTable";
import Table from "../components/tables/Table";

const Plans = () => {
  return (
    <div>
      <Table data={plansData} columns={plansColumns} />
    </div>
  );
};

export default Plans;
