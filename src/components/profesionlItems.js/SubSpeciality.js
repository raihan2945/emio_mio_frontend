import React from "react";
import { Form, Select } from "antd";

const SubSpeciality = () => {
  return (
    <div>
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
              {
                label: "Cardiac Electrophysiologist",
                value: "Cardiac Electrophysiologist",
              },
            ]}
          />
        </Form.Item>
    </div>
  );
};

export default SubSpeciality;
