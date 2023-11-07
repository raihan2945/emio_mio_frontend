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
} from "antd";
import { AiOutlineCloudUpload, AiFillSave } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "./profile.css";
import BasicInfo from "../../views/DoctorProfile/BasicInfo";
import Footer from "../../views/DoctorProfile/Footer";
import Chambers from "../../views/DoctorProfile/Chambers";
import ProfessionalInfo from "../../views/DoctorProfile/ProfessionalInfo";
import Degrees from "../../views/DoctorProfile/Degrees";
import Experiences from "../../views/DoctorProfile/Experiences";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

const Profile = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState();
  const fileInputRef = useRef();

  const [expandIconPosition, setExpandIconPosition] = useState("start");

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

  const onFinish = () => {};

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const onChange = (key) => {
    console.log(key);
  };

  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );

  return (
    <div style={{ position: "relative" }}>
      {contextHolder}
      <h5>Doctor</h5>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic Info" key="1">
            <BasicInfo />
          </TabPane>
          <TabPane tab=" Professional Info" key="2">
            <ProfessionalInfo />
          </TabPane>
          <TabPane tab="Chambers" key="3">
            <Chambers />
          </TabPane>
          <TabPane tab="Degrees" key="4">
            <Degrees />
          </TabPane>
          <TabPane tab="Experiences" key="5">
            <Experiences />
          </TabPane>
        </Tabs>
      </Form>

      {/* <div
        onClick={() => success()}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          cursor: "pointer",
          backgroundColor: "#006BB1",
          padding: "5px 5px",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        }}
      >
        <AiFillSave style={{ fontSize: "2rem", color: "white" }} />
      </div> */}
    </div>
  );
};

export default Profile;
