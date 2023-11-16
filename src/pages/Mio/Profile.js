import React, { useEffect, useRef, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Form, Input, Button, Divider, message, Card } from "antd";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useGetProfileQuery } from "../../redux/features/user/userApi";

const Profile = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const [profile, setProfile] = useState();

  const { data: getProfile } = useGetProfileQuery();

  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const fileInputRef = useRef();

  const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  let initialValues = {};

  useEffect(() => {
    if (getProfile?.data) {
      setProfile(getProfile?.data);
    }
  }, [getProfile]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  useEffect(() => {
    if(profile){
     const initialData = {
      sap_user_code : form.sap_user_code
     }
     form.setFieldValue(initialData)
     initialValues=initialValues
    }
   }, [profile]);

  console.log("initial values is : ", form);
  console.log("prfoile is : ", profile);

  form.sap_user_code = 46465

  return (
    <Card style={{ padding: "0px 10px" }}>
      {profile && <Form
        // form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        initialValues={initialValues}
        onFinish={onFinish}
      >
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
              width: "9rem",
              padding: ".2rem",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          >
            <img
              src={previewImage || "/icons/profile.png"}
              style={{ width: "100%", objectFit: "cover" }}
              alt="Profile"
            />
          </div>
          <input
            onChange={handleFileSelected}
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
            <UploadOutlined />
            Upload
          </Button>
        </div>

        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="sap_user_code"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="SAP Id" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          // label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <input value={profile.name} placeholder="Full Name" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          // label="Name"
          style={{ marginBottom: "10px" }}
          name="mobile"
          rules={[{ required: true, message: "Please enter mobile number!" }]}
        >
          <Input placeholder="Mobile No." style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input placeholder="Email" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="date"
          rules={[
            { required: true, message: "Please enter your date of birth!" },
            { type: "date", message: "Please enter your date of birth!" },
          ]}
        >
          <Input placeholder="Date of Birth" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Divider
          style={{ margin: "7px 0px", fontSize: "12px", color: "gray" }}
          orientation="left"
        >
          Others
        </Divider>

        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="email"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input placeholder="Whatsapp Number" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="email"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input
            placeholder="Other Mobile Number"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>
        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="email"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input
            placeholder="Other Email Address"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>}
    </Card>
  );
};

export default Profile;
