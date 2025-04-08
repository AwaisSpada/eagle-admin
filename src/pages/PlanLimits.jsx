import React from "react";
import planlimitsData from "../constants/planLimitsData.json";
import { planLimitsColumns } from "../components/tables/PlanLimits";
import Table from "../components/tables/Table";

const PlanLimits = () => {
  return (
    <div>
      <Table data={planlimitsData} columns={planLimitsColumns} />
    </div>
  );
};

export default PlanLimits;
