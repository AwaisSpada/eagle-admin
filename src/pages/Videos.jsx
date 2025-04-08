import React from "react";
import videoData from "../constants/videosData.json";
import { videoColumns } from "../components/tables/VideoTable";
import Table from "../components/tables/Table";

const Videos = () => {
  return (
    <div>
      <Table data={videoData} columns={videoColumns} />
    </div>
  );
};

export default Videos;
