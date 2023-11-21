import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  message,
  Collapse,
  Divider,
  Tabs,
} from "antd";
import { AiOutlineCloudUpload, AiFillSave } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SettingOutlined, CaretRightOutlined } from "@ant-design/icons";
import "../../pages/Doctor/profile.css";
import SubSpeciality from "../../components/profesionlItems.js/SubSpeciality";
import Specailtiy from "../../components/profesionlItems.js/Specailtiy";
import Services from "../../components/profesionlItems.js/Services";
import { useGetAllSpecialtyByDoctorQuery, useGetAllSubSpecialityByDoctorQuery } from "../../redux/features/speciality/specialityApi";
import { useDoctorUpdatePutMutation } from "../../redux/features/doctor/doctorApi";

const { Panel } = Collapse;
const { Option } = Select;

const ProfessionalInfo = ({ doctor, success, error, warning }) => {
  const [specialities, setSpecialities] = useState([]);
  const [sub_specialities, setSub_specialities] = useState([]);
  const [services, setServices] = useState([]);
  const [exp, setExp] =useState()

  const [
    updateDoctor,
    { status: updateStatus, error: updateError, isSuccess: updateSuccess },
  ] = useDoctorUpdatePutMutation();

  const { data: getSpecialities, refetch: refetchSpecialities } =
    useGetAllSpecialtyByDoctorQuery(doctor?.id);
  const { data: getSubSpecialities, refetch: refetchSubSpecialities } =
  useGetAllSubSpecialityByDoctorQuery(doctor?.id);
  const { data: getServices, refetch: refetchServices } =
  useGetAllSubSpecialityByDoctorQuery(doctor?.id);

  useEffect(() => {
    if (updateError) {
      if (updateError.status == 400) {
        updateError.data.error.map((er) => {
          return error(er);
        });
      }
      if (updateError.status == 500) {
        error("Server Error : 500");
      }
    }
    if (updateSuccess) {
      // doctorRefetch();
      success("Profile updated successfully");
      // refetchSpecialities();
      // refetchSubSpecialities();
      // refetchServices()
    }
  }, [updateStatus]);

  useEffect(() => {
    if (getSpecialities?.data) {
      const newArray =
        Array.isArray(getSpecialities?.data) &&
        getSpecialities?.data?.map((d) => {
          return {
            label: `${d.name}`,
            value: d.id,
          };
        });
      setSpecialities(newArray);
    }
  }, [getSpecialities]);

  useEffect(() => {
    if (getSubSpecialities?.data) {
      const newArray =
        Array.isArray(getSubSpecialities?.data) &&
        getSubSpecialities?.data?.map((d) => {
          return {
            label: `${d.name}`,
            value: d.id,
          };
        });
      setSub_specialities(newArray);
    }
  }, [getSubSpecialities]);

  useEffect(() => {
    if (getServices?.data) {
      const newArray =
        Array.isArray(getServices?.data) &&
        getServices?.data?.map((d) => {
          return {
            label: `${d.name}`,
            value: d.id,
          };
        });
      setServices(newArray);
    }
  }, [getServices]);

  useEffect(() => {
    refetchSpecialities();
    refetchSubSpecialities()
    refetchServices();
  }, []);

  const onFinish = () => {
    const specialites = specialities.map((sp) => sp.value);
    const sspecialities = sub_specialities.map((sp) => sp.value);
    const sServices = services.map((sp) => sp.value);

    const updateData = {
      speciality: specialites,
      sub_speciality: sspecialities,
      services: sspecialities,
    };
    if(exp){
      updateData.years_of_experience = exp
    }

    updateDoctor({ id: doctor?.id, data: updateData });
  };

  // console.log("all Data is : ", services)

  return (
    <div>
      <div title="Basic Information" style={{ padding: "0px 10px" }}>
        <Form.Item
          style={{ marginBottom: "10px" }}
          label={<p style={{ margin: 0, padding: 0 }}>Years of experience : </p>}
          // name="years_of_experience"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          // rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <input type="number" onChange={(e)=>setExp(e.target.value)} defaultValue={doctor?.years_of_experience} className="form-control"/>
        </Form.Item>

        <Specailtiy values={specialities} setValues={setSpecialities} />
       
        <SubSpeciality
          values={sub_specialities}
          setValues={setSub_specialities}
        />

        <Services values={services} setValues={setServices} />

        <Form.Item style={{ textAlign: "center" }}>
          <Button onClick={onFinish} type="primary">
            Save
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
