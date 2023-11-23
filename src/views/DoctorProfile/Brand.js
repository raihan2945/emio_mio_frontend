import React, { useState } from "react";
import Core from "../../components/brandItems/Core";
import { Button, Form } from "antd";
import Support from "../../components/brandItems/Support";
import Prospect from "../../components/brandItems/Prospect";

const Brand = () => {
  const [values, setValues] = useState([]);
  const [values1, setValues1] = useState([]);
  const [values2, setValues2] = useState([]);
  return (
    <div style={{ padding: "0rem .7rem" }}>
      <Core values={values} setValues={setValues} />
      <Support values={values1} setValues={setValues1} />
      <Prospect values={values2} setValues={setValues2} />
      <div style={{textAlign:"center"}}>
        <Button type="primary">Save</Button>
      </div>
    </div>
  );
};

export default Brand;
