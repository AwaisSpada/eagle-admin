import React from "react";
import usersData from "../constants/usersData.json";
import { usersTable } from "../components/tables/usersTable";
import Table from "../components/tables/Table";

const Users = () => {
  return (
    <div>
      <Table data={usersData} columns={usersTable} />
    </div>
  );
};

export default Users;
