import React, { useEffect, useState } from "react";
import { Form, AutoComplete, Select } from "antd";
import {} from "react-hook-form";
import { useGetDegreesQuery } from "../../redux/features/degree/degreeApi";
import { useGetInstitutesQuery } from "../../redux/features/institue/instituteApi";
import { useGetCountriesQuery } from "../../redux/features/locations/locationApi";

const { Option } = Select;

const DegreeForm = () => {
  const [degree, setDegree] = useState();

  const [institute, setInstitute] = useState();

  const [country, setCountry] = useState();

  const { data: getDegrees, refetch: refetchDegrees } = useGetDegreesQuery(
    degree?.label
  );

  const { data: getInstitutes, refetch: refetchIns } = useGetInstitutesQuery(
    institute?.label
  );

  const { data: getCountries, refetch: refetchCountry } = useGetCountriesQuery(
    country?.label
  );

  const years = [];
  for (let year = 1980; year <= 2023; year++) {
    years.push({ label: year, value: year });
  }

  return (
    <div>
      <Form layout="vertical">
        <Form.Item style={{ marginBottom: "5px" }} label="Degree">
          <AutoComplete
            onChange={(value, option) => {
              setDegree({ label: value });
              refetchDegrees();
            }}
            onSelect={(value, option) => {
              setDegree({ value: option.value, label: option.label });
            }}
            options={getDegrees?.data?.map((d) => {
              return {
                label: d.name,
                value: d.id,
              };
            })}
            value={degree?.label}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "5px" }} label="Institute">
          <AutoComplete
            onChange={(value, option) => {
              setInstitute({ label: value });
              refetchIns();
            }}
            onSelect={(value, option) => {
              setInstitute({ value: option.value, label: option.label });
            }}
            options={getInstitutes?.data?.map((d) => {
              return {
                label: d.name,
                value: d.id,
              };
            })}
            value={institute?.label}
          />
        </Form.Item>
        <Form.Item label="Country" style={{ marginBottom: "5px" }}>
          <AutoComplete
            onChange={(value, option) => {
              setCountry({ label: value });
              refetchCountry();
            }}
            onSelect={(value, option) => {
              setCountry({ value: option.value, label: option.label });
            }}
            options={getCountries?.data?.map((d) => {
              return {
                label: d.name,
                value: d.id,
              };
            })}
            value={country?.label}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "5px" }}>
          <Select placeholder="Select passing year" options={years} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DegreeForm;
