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
import Footer from "./Footer";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

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
    <Form layout="vertical">
      <div title="Basic Information" style={{ padding: "0px 10px" }}>
        <div>
          <p style={{ margin: 0, color: "gray" }}>Profile Photo : </p>
          <div
            style={{
              margin: ".5rem 0rem",
              display: "flex",
              alignItems: "end",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "6rem",
                padding: ".2rem",
                borderRadius: "5px",
                border: "1px solid gray",
              }}
            >
              <img
                src={previewImage || "/icons/profile.png"}
                style={{
                  width: "100%",
                  height: "6rem",
                  objectFit: "cover",
                }}
                alt="Profile"
              />
            </div>
            <input
              onChange={handleImageSelected}
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
              accept="/*image/"
            />
            <Button
              size="small"
              onClick={() => fileInputRef.current.click()}
              style={{ marginTop: ".5rem" }}
            >
              <AiOutlineCloudUpload />
              Upload
            </Button>
          </div>
        </div>

        <Form.Item
          style={{ marginBottom: "5px", marginTop: "15px" }}
          // label="Full Name"
          name="shop_name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Full Name" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="gender"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select defaultValue="male">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="mobile"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Mobile" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="email"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="email" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Date of birth : </p>}
          name="birthday"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <DatePicker placeholder="Date of birth" style={{ width: "100%" }} />
        </Form.Item>
        
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="bio"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Bio" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="address"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Address" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="recognitions"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Recognitions" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="memberships"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Memberships" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="life_family"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Life Family" style={{ fontWeight: "400" }} />
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
          name="location"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Location" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label={<p style={{ margin: 0, padding: 0 }}>Gender : </p>}
          name="website_url"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Website" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0, padding: 0 }}>Division : </p>}
          name="division"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select defaultValue="">
            <Option value="dhaka">Dhaka</Option>
            <Option value="chattogram">Chattagram</Option>
            <Option value="shylet">Shylet</Option>
            <Option value="rajshahi">Rajshahi</Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0, padding: 0 }}>District : </p>}
          name="district"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select defaultValue="">
            <Option value="dhaka">Dhaka</Option>
            <Option value="chattogram">Narsingdi</Option>
            <Option value="shylet">Narayanganj</Option>
            <Option value="rajshahi">Gazipur</Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0, padding: 0 }}>Upozila : </p>}
          name="district"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select defaultValue="">
            <Option value="dhaka">Monohardi</Option>
            <Option value="chattogram">Kapasia</Option>
            <Option value="shylet">Shibpur</Option>
            <Option value="rajshahi">Polash</Option>
          </Select>
        </Form.Item>
      </div>
      <Footer click={success}/>
    </Form>
  );
};

export default BasicInfo;
