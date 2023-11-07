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
  Checkbox,
} from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "../../pages/Doctor/profile.css";

const { Panel } = Collapse;
const { Option } = Select;

const Experiences = () => {
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
      name: "Prof. Dr.",
      ins: "Najarpur Community Clinic - Raypura",
      date: "Apr,2020 - March,2023",
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
                  <p style={{ margin: 0, fontSize: ".7rem", color: "gray" }}>
                    {d.date}
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
                    onClick={() => setAddDegree(true)}
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
            Add New Experience
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
            <Select placeholder="Select Designation">
              <Option value="bds">Dr.</Option>
              <Option value="bpt">Prof. Dr</Option>
              <Option value="bhms">Assist. Prof Dr.</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select placeholder="Select institution">
              <Option value="dmc">Dhaka Medical College, Dhaka</Option>
              <Option value="bpt">Sir Salimullah Medical college, Dhaka</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Starting : "
            style={{ width: "100%", flex: 1, marginBottom: "5px" }}
          >
            <div style={{ display: "flex", gap: ".5rem" }}>
              <Select placeholder="Select Starting Year">
                <Option value=""></Option>
                <Option value="2023">2023</Option>
                <Option value="2022">2022</Option>
                <Option value="2021">2021</Option>
              </Select>

              <Select placeholder="Select Starting Month">
                <Option value=""></Option>
                <Option value="2023">January</Option>
                <Option value="2022">February</Option>
                <Option value="2021">March</Option>
                <Option value="2021">April</Option>
                <Option value="2021">June</Option>
                <Option value="2021">July</Option>
              </Select>
            </div>
          </Form.Item>
          <Form.Item style={{ width: "100%", flex: 1, marginBottom: "5px" }}>
            <Checkbox>Currently Working Here</Checkbox>
          </Form.Item>
          <Form.Item
            label="Ending : "
            style={{ width: "100%", flex: 1, marginBottom: "5px" }}
          >
            <div style={{ display: "flex", gap: ".5rem" }}>
              <Select placeholder="Ending Year">
                <Option value=""></Option>
                <Option value="2023">2023</Option>
                <Option value="2022">2022</Option>
                <Option value="2021">2021</Option>
              </Select>

              <Select placeholder="Ending Month">
                <Option value=""></Option>
                <Option value="2023">January</Option>
                <Option value="2022">February</Option>
                <Option value="2021">March</Option>
                <Option value="2021">April</Option>
                <Option value="2021">June</Option>
                <Option value="2021">July</Option>
              </Select>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Experiences;
