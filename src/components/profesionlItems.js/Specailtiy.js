import React from "react";
import { Form, Select } from "antd";

const Specailtiy = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Specailtiy;
