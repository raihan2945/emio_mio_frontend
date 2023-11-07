import React, { useEffect, useRef, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Form, Input, Button, Divider, message, Card, Select } from "antd";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AiOutlineCloudUpload } from "react-icons/ai";
const { Option } = Select;

const Profile = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState();
  const fileInputRef = useRef();

  const [shopPhoto, setShopPhoto] = useState(null);
  const [shopPreview, setShopPreview] = useState(null);
  const shopPhotoRef = useRef();

  const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

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
    if (shopPhoto) {
      const reader = new FileReader();
      reader.onload = () => {
        setShopPreview(reader.result);
      };
      reader.readAsDataURL(shopPhoto);
    }
  }, [shopPhoto]);

  // console.log("File is : ", file);

  return (
    <Card style={{ padding: "0px 10px" }}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
      >
        <div>
          <p style={{ margin: 0, color: "gray" }}>Shop Owner Photo : </p>
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
                style={{ width: "100%", height: "6rem", objectFit: "cover" }}
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
        </div>
        <div>
          <p style={{ margin: 0, color: "gray" }}>Shop Photo : </p>
          <div
            style={{
              margin: ".5rem 0rem",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                padding: ".2rem",
                height: "8rem",
                borderRadius: "5px",
                border: "1px solid gray",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              {shopPreview ? (
                <img
                  src={shopPreview}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Profile"
                />
              ) : (
                <img
                  src={"/icons/gallery.png"}
                  style={{ width: "100%", height: "5rem", objectFit: "contain" }}
                  alt="Profile"
                />
              )}
            </div>
            <input
              onChange={(e) => setShopPhoto(e.target.files[0])}
              ref={shopPhotoRef}
              style={{ display: "none" }}
              type="file"
              accept="/*image/"
            />
            <Button
              size="small"
              onClick={() => shopPhotoRef.current.click()}
              style={{
                marginTop: ".5rem",
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              <AiOutlineCloudUpload style={{ margin: 0 }} />
            </Button>
          </div>
        </div>

        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="shop_name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Shop Name" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="shop_mobile"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Shop Mobile No." style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item style={{ marginBottom: "10px" }} name="shop_whatsapp">
          <Input placeholder="Email" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0 }}>District : </p>}
          name="district"
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select
            style={{ width: "100%", marginTop: "-50px" }}
            defaultValue="dhaka"
          >
            <Option value="dhaka">Dhaka</Option>
            <Option value="gazipur">Gazipur</Option>
            <Option value="narsingdi">Narsingdi</Option>
            <Option value="narayanganj">Narayanganj</Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0 }}>Upozila : </p>}
          name="upozila"
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Select
            style={{ width: "100%", marginTop: "-50px" }}
            defaultValue="Select Upozila"
          >
            <Option value="Monohardi">Monohardi</Option>
            <Option value="Shibpur">Shibpur</Option>
            <Option value="Polash">Polash</Option>
            <Option value="Belabo">Belabo</Option>
          </Select>
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="shop_address"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            placeholder="Shop Address"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="lattitude"
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Lattitude" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "10px", marginTop: "15px" }}
          // label="Name"
          name="longitude"
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Longitude" style={{ fontWeight: "400" }} />
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
          name="other_mobile"
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

        <Divider
          style={{ margin: "7px 0px", fontSize: "12px", color: "gray" }}
          orientation="left"
        >
          Shop Owner
        </Divider>
        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="other_mobile"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input placeholder="Shop Owner Name" style={{ fontWeight: "400" }} />
        </Form.Item>
        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="other_mobile"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input
            placeholder="Shop Owner Mobile"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>
        <Form.Item
          // label="Email"
          style={{ marginBottom: "10px" }}
          name="other_mobile"
          // rules={[
          //   { required: true, message: "Please enter your email!" },
          //   { type: "email", message: "Please enter a valid email address!" },
          // ]}
        >
          <Input placeholder="Shop Owner Email" style={{ fontWeight: "400" }} />
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Profile;
