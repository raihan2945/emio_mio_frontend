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
import SubSpeciality from "../../components/profesionlItems.js/SubSpeciality";
import Specailtiy from "../../components/profesionlItems.js/Specailtiy";
import Services from "../../components/profesionlItems.js/Services";

const { Panel } = Collapse;
const { Option } = Select;

const ProfessionalInfo = ({ doctor, success, error, warning }) => {
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
          <Input
            placeholder="Years Of Experience"
            style={{ fontWeight: "400" }}
          />
        </Form.Item>
       
       <Specailtiy/>
       <SubSpeciality/>
       <Services/>
       
        <Form.Item>
          <Button>Save</Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
