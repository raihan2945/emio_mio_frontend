import React, { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { Select, Spin } from "antd";
import { useGetAllSpecialtyQuery } from "../../redux/features/speciality/speciality";

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
  console.log("fetching user", username);
  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      }))
    );
}

const Speciality = ({ doctor, success, error, warning }) => {
  const [value, setValue] = useState([]);

  const [specialities, setSpecialities] = useState([]);

  const { data: getSpeciality } = useGetAllSpecialtyQuery();

  useEffect(()=>{
    if(getSpeciality?.data){
        setSpecialities(getSpeciality?.data)
    }
  },[getSpeciality])

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={specialities}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: "100%",
      }}
    />
  );
};
export default Speciality;
