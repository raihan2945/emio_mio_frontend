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
} from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "../../pages/Doctor/profile.css";

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
        <Form>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select placeholder="Select Degree">
              <Option value="bds">BDS</Option>
              <Option value="bpt">BPT</Option>
              <Option value="bhms">BHMS</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select placeholder="Select institution">
              <Option value="dmc">Dhaka Medical College, Dhaka</Option>
              <Option value="bpt">Sir Salimullah Medical college, Dhaka</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select defaultValue="bangladesh" placeholder="Select Country">
              <Option value="bangladesh">Bangladesh</Option>
              <Option value="usa">USA</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select placeholder="Select passing year">
              <Option value="2023">2023</Option>
              <Option value="2022">2022</Option>
              <Option value="2021">2021</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Degrees;
