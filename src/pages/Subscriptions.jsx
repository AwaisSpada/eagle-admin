import React from "react";
import subscribersData from "../constants/subscriptionData.json";
import { subscriptionColumn } from "../components/tables/SubscriptionsTable";
import Table from "../components/tables/Table";
const Subscriptions = () => {
  return (
    <div>
      <Table
        data={subscribersData}
        columns={subscriptionColumn}
        selectable={false}
      />
    </div>
  );
};

export default Subscriptions;
