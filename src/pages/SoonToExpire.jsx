import React from "react";
import soonToExpireData from "../constants/soonToExpireData.json";
import { soonToExpire } from "../components/tables/SoonToExpireTable";
import Table from "../components/tables/Table";

const SoonToExpire = () => {
  return (
    <div>
      <Table data={soonToExpireData} columns={soonToExpire} />
    </div>
  );
};

export default SoonToExpire;
