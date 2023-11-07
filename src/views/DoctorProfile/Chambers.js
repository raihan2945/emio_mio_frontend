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
  TimePicker,
} from "antd";
import { AiOutlineCloudUpload, AiFillSave } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "../../pages/Doctor/profile.css";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

const Chambers = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState();
  const fileInputRef = useRef();

  const [isAddChmaber, setAddChamber] = useState(false);

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

  const handleImageSelected = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const options = [
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" },
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <div
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0, color: "#006BB1" }}>Chambers</p>{" "}
              <Button
                type="primary"
                style={{ fontSize: ".7rem", backgroundColor: "#006BB1" }}
                size="small"
              >
                Add Chamber
              </Button>
            </div>
          }
          style={{ padding: "0px 0px" }}
        >
          <Collapse
            style={{ backgroundColor: "white" }}
            bordered={false}
            accordion
          >
            <Panel
              header={
                <div>
                  <p style={{ margin: 0, fontWeight: "500" }}>
                    Nalabta Community clinic- Raypura
                  </p>
                  <p style={{ margin: 0 }}>Narsingdi</p>
                </div>
              }
              key="1"
            >
              <div>
                <div>
                  <p style={{ margin: 0, fontSize: ".7rem" }}>Address</p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: "#616161",
                    }}
                  >
                    Raypura, Narsingdi
                  </p>
                  <Divider style={{ margin: "5px 0px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: ".7rem" }}>
                    Appointment Booking Number
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: "#616161",
                    }}
                  >
                    01630542945
                  </p>
                  <Divider style={{ margin: "5px 0px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: ".7rem" }}>Available Days</p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: "#616161",
                    }}
                  >
                    Mon, Tue, Fri, Sun
                  </p>
                  <Divider style={{ margin: "5px 0px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: ".7rem" }}>Available Time</p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: "#616161",
                    }}
                  >
                    03:30 AM - 03:30PM
                  </p>
                  <Divider style={{ margin: "5px 0px" }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: ".7rem" }}>
                    Consultaion Duration
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: "#616161",
                    }}
                  >
                    30Mins
                  </p>
                  <Divider style={{ margin: "5px 0px" }} />
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: ".7rem" }}>
                      In-clinic consultation fee
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "#2ECD71",
                      }}
                    >
                      ৳ 500
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: ".7rem" }}>
                      Follow-up fee
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "#2ECD71",
                      }}
                    >
                      ৳ 400
                    </p>
                  </div>
                </div>
                {/* <Divider style={{ margin: "5px 0px" }} /> */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                    marginTop: "5px",
                  }}
                >
                  <Button
                    size="small"
                    style={{
                      fontSize: ".6rem",
                      color: "red",
                      borderColor: "red",
                      fontWeight: 400,
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    style={{
                      fontSize: ".6rem",
                      color: "#006BB1",
                      borderColor: "#006BB1",
                      fontWeight: 400,
                    }}
                    onClick={() => setAddChamber(true)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </Panel>
            {/* <Panel header="Panel 2" key="2">
              <p>Content of Panel 2</p>
            </Panel> */}
          </Collapse>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button
            onClick={() => setAddChamber(true)}
            type="primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            Add New Chamber
          </Button>
        </div>
      </div>

      <Modal
        title="Add New Chamber"
        centered
        open={isAddChmaber}
        onOk={() => setAddChamber(false)}
        onCancel={() => setAddChamber(false)}
        okText="Add"
      >
        <Form>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Input placeholder="Hospital" style={{ fontWeight: "400" }} />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Input placeholder="Add. Address" style={{ fontWeight: "400" }} />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Input
              placeholder="Appointment Booking Number"
              style={{ fontWeight: "400" }}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Input
              placeholder="Contact Person/Assistant Name"
              style={{ fontWeight: "400" }}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Input
              placeholder="Assistant Phone Number"
              style={{ fontWeight: "400" }}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Availabe Days"
              defaultValue={["Sun"]}
              onChange={handleChange}
              options={options}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
          <div style={{ display: "flex",width:"100%", gap:"5px" }}>
            {/* <Form.Item name="start_time" style={{ marginBottom: "5px", }}> */}
            <TimePicker style={{  width: "100%" }} />
            {/* </Form.Item> */}
            {/* <Form.Item name="start_time" style={{marginBottom: "5px" }}> */}
            <TimePicker
              placeholder="End Time"
              style={{width: "100%" }}
            />
            {/* </Form.Item> */}
          </div>
          </Form.Item>

          <Form.Item style={{ marginBottom: "5px" }}>
            <Select
              //   mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Availabe Days"
              defaultValue={"15 mins"}
              onChange={handleChange}
              options={[
                { label: "15 mins", value: "15 mins" },
                { label: "20 mins", value: "20 mins" },
                { label: "30 mins", value: "30 mins" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Chambers;
