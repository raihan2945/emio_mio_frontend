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
import "../../pages/Doctor/profile.css";

const { Panel } = Collapse;
const { Option } = Select;

const BasicInfo = () => {
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
  return (
    <div>
      <div title="Basic Information" style={{ padding: "0px 10px" }}>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="years_of_experience"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="BMDC" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="years_of_experience"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            placeholder="Years Of Experience"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="speciality"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select
              mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Speciality"
            defaultValue={"Cardiologist"}
            // onChange={handleChange}
            options={[
              { label: "Cardiologist", value: "Cardiologist" },
              { label: "Neurologist", value: "Neurologist" },
              { label: "Gastroentrologist", value: "Gastroentrologist" },
            ]}
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="sub_speciality"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select
              mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Sub-Speciality"
            defaultValue={"Neurology"}
            // onChange={handleChange}
            options={[
              { label: "Neurology", value: "Neurology" },
              { label: "Gastroentrology", value: "Gastroentrology" },
              { label: "Cardiac Electrophysiologist", value: "Cardiac Electrophysiologist" },
            ]}
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="services"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select
              mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Services"
            defaultValue={"Ct Angiogram"}
            // onChange={handleChange}
            options={[
              { label: "Ct Angiogram", value: "Ct Angiogram" },
              { label: "Acute Aortic Dessection", value: "Acute Aortic Dessection" },
              { label: "Heart Conditions", value: "Heart Conditions" },
            ]}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default BasicInfo;
