import React, { useEffect, useMemo, useRef, useState } from "react";
import specialityApi, {
  useGetAllServicesQuery,
  useGetAllSubSpecialityQuery,
} from "../../redux/features/speciality/specialityApi";
import debounce from "lodash/debounce";
import { Form, Select, Spin } from "antd";
import { useGetAllSpecialtyQuery } from "../../redux/features/speciality/specialityApi";
import { useQuery } from "@reduxjs/toolkit/query/react";
import DebounceSelect from "../shared/DebounceSelect";

const Services = ({ values, setValues, success, error, warning }) => {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState();

  const { data: getData, refetch } = useGetAllServicesQuery(searchKey);

  useEffect(() => {
    if (getData?.data) {
      const newArray =
        Array.isArray(getData?.data) &&
        getData?.data?.map((d) => {
          return {
            label: `${d.name}`,
            value: d.id,
          };
        });
      setItems(newArray);
    }
  }, [getData]);

  return (
    <Form.Item label="Services">
      <DebounceSelect
        mode="multiple"
        value={values}
        placeholder="Select users"
        fetchOptions={items}
        onChange={(newValue) => {
          setValues(newValue);
        }}
        refetch={refetch}
        setSearchKey={setSearchKey}
        style={{
          width: "100%",
        }}
      />
    </Form.Item>
  );
};
export default Services;
