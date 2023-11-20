import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "react-hook-form";
import { useGetHospitalsQuery } from "../../redux/features/hospital/hospitalApi";
import DebounceSingleSelect from "../../components/shared/DebounceSingleSelect";

const HospitalForm = () => {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState();

  const [value, setValue] = useState();

  const { data: getData, refetch } = useGetHospitalsQuery(searchKey);

  // console.log("get hospitals is : ", getData);

  useEffect(() => {
    if (getData?.data) {
      const newArray =
        Array.isArray(getData?.data) &&
        getData?.data?.map((d) => {
          return {
            label: `${d.name}`,
            value: d.id,
            subLabel: `${d?.upazila} ${d.full_address}`,
            district:d.district,
            upazila : d.upazila,
            full_address : d.full_address
          };
        });
      setItems(newArray);
    }
  }, [getData]);

  return (
    <div>
      <form layut="vertical">
        <div class="mb-2">
          <p for="exampleFormControlInput1" class="form-label mb-0">
            Hospital Name
          </p>
          <DebounceSingleSelect
            mode="single"
            showSearch
            value={value}
            placeholder="Select users"
            fetchOptions={items}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            refetch={refetch}
            setSearchKey={setSearchKey}
            style={{
              width: "100%",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default HospitalForm;
