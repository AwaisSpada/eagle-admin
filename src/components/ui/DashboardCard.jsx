import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => props.navigateTo && navigate(props.navigateTo)}
      className={`${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default DashboardCard;
