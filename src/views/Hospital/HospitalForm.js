import { Select } from "antd";
import React from "react";
import { Form } from "react-hook-form";

const HospitalForm = () => {
  return (
    <div>
      <form layut="vertical">
        <div class="mb-2">
          <p for="exampleFormControlInput1" class="form-label mb-0">
           Hospital Name
          </p>
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
        </div>
      </form>
    </div>
  );
};

export default HospitalForm;
