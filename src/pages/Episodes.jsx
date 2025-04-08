import React from "react";
import episodeData from "../constants/episodeData.json";
import { episodeTable } from "../components/tables/EpisodeTable";
import Table from "../components/tables/Table";
import Loader from "../components/common/Loader";

const Episodes = () => {
  return (
    <div>
      <Table data={episodeData} columns={episodeTable} onNewItem={"create"} />
    </div>
  );
};

export default Episodes;
