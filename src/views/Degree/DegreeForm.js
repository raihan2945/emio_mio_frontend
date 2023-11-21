import React, { useEffect, useState } from "react";
import { Form, AutoComplete, Select } from "antd";
import {} from "react-hook-form";
import { useGetDegreesQuery } from "../../redux/features/degree/degreeApi";

const { Option } = Select;

const DegreeForm = () => {
  const [degrees, setDegrees] = useState([]);
  const [degreeKey, setDegreeKey] = useState();

  const { data: getDegrees, refetch: refetchDegrees } =
    useGetDegreesQuery(degreeKey);

  useEffect(() => {
    if (degreeKey) {
      refetchDegrees();
    }
  }, [degreeKey]);

  useEffect(() => {
    if (getDegrees?.data) {
      setDegrees(
        getDegrees?.data?.map((d) => {
          return {
            label: d.name,
            value: d.id,
          };
        })
      );
    }
  }, [getDegrees]);
  return (
    <div>
      <Form>
        <Form.Item style={{ marginBottom: "5px" }} label="Degree">
          <AutoComplete
            onChange={(value) => setDegreeKey(value)}
            options={degrees}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "5px" }}>
          <Select placeholder="Select institution">
            <Option value="dmc">Dhaka Medical College, Dhaka</Option>
            <Option value="bpt">Sir Salimullah Medical college, Dhaka</Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ marginBottom: "5px" }}>
          <Select defaultValue="bangladesh" placeholder="Select Country">
            <Option value="bangladesh">Bangladesh</Option>
            <Option value="usa">USA</Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ marginBottom: "5px" }}>
          <Select placeholder="Select passing year">
            <Option value="2023">2023</Option>
            <Option value="2022">2022</Option>
            <Option value="2021">2021</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DegreeForm;
