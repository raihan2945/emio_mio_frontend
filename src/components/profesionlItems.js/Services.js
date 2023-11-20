import React from "react";
import { Form, Select } from "antd";

const Services = () => {
  return (
    <div>
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
            {
              label: "Acute Aortic Dessection",
              value: "Acute Aortic Dessection",
            },
            { label: "Heart Conditions", value: "Heart Conditions" },
          ]}
        />
      </Form.Item>
    </div>
  );
};

export default Services;
