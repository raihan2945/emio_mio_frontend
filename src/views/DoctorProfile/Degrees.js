import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  message,
  Collapse,
  Divider,
  Tabs,
  Modal,
  AutoComplete,
} from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "../../pages/Doctor/profile.css";
import DegreeForm from "../Degree/DegreeForm";

const { Panel } = Collapse;
const { Option } = Select;

const Degrees = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [isAddDegree, setAddDegree] = useState(false);

  const success = () => {
    messageApi.open({
      type: "success",
      content: <div style={{}}> Doctor data is updated</div>,
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
      duration: 2,
      icon: (
        <BsFillCheckCircleFill
          style={{ color: "green", fontSize: "1.5rem", marginBottom: ".5rem" }}
        />
      ),
    });
  };

  const degrees = [
    {
      name: "FRCS in Cardiology",
      ins: "Khulna Medical College, Khulna, 1980",
    },
  ];

  return (
    <>
      <div>
        {degrees?.map((d) => {
          return (
            <Card style={{ padding: "0", marginBottom: "5px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ margin: 0 }}>{d.name}</p>
                  <p style={{ margin: 0, fontSize: ".7rem", color: "gray" }}>
                    {d.ins}
                  </p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <div
                    style={{
                      border: "1px solid green",
                      padding: "3px 5px",
                      borderRadius: "3px",
                    }}
                    onClick={()=>setAddDegree(true)}
                  >
                    <AiFillEdit style={{ color: "green", fontSize: "1rem" }} />
                  </div>
                  <div
                    style={{
                      border: "1px solid red",
                      padding: "3px 5px",
                      borderRadius: "3px",
                    }}
                  >
                    <AiFillDelete style={{ color: "red", fontSize: "1rem" }} />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button
            onClick={() => setAddDegree(true)}
            type="primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            Add New Degree
          </Button>
        </div>
      </div>
      <Modal
        title="Add New Degree"
        centered
        open={isAddDegree}
        onOk={() => setAddDegree(false)}
        onCancel={() => setAddDegree(false)}
        okText="Add"
      >
        <DegreeForm/>
      </Modal>
    </>
  );
};

export default Degrees;
