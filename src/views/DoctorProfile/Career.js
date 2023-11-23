import React from "react";
import { Button, Card, Popconfirm } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Trainings from "../Training/Trainings";
import Researchs from "../Research/Researchs";

const Career = () => {
  return (
    <div>
      <Trainings />
      <div style={{marginTop:"1rem"}}>
        <Researchs />
      </div>
    </div>
  );
};

export default Career;
