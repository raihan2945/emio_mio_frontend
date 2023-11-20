import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

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
  Modal,
  TimePicker,
  Popconfirm,
} from "antd";
import { AiOutlineCloudUpload, AiFillSave } from "react-icons/ai";
import dayjs from "dayjs";
import moment from "moment";

import "../../pages/Doctor/profile.css";
import {
  useCreateChamberMutation,
  useDeleteChamberMutation,
  useGetChambersQuery,
  useUpdateChamberMutation,
} from "../../redux/features/chamber/chamberApi";
import HospitalForm from "../Hospital/HospitalForm";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

const Chambers = ({ doctor, success, error, warning }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  const [chambers, setChambers] = useState([]);

  const { data: getChambers, refetch: refetchChambers } = useGetChambersQuery(
    doctor?.id
  );
  const [
    createChamber,
    { error: createError, status: createStatus, isSuccess: createSuccess },
  ] = useCreateChamberMutation();
  const [
    updateChamber,
    { error: updateError, status: updateStatus, isSuccess: updateSuccess },
  ] = useUpdateChamberMutation();
  const [
    deleteChamber,
    { error: deleteError, status: deleteStatus, isSuccess: deleteSucces },
  ] = useDeleteChamberMutation();

  const [isAddChmaber, setAddChamber] = useState(false);
  const [editChamber, setEditChamber] = useState();
  const [isHospital, setIsHospital] = useState(false);

  const options = [
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" },
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
  ];
  const format = "HH:mm";

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const resetAndClose = () => {
    reset();
    setAddChamber(false);
    setEditChamber(false);
    if (formRef.current) {
      formRef.current.resetFields();
    }
  };

  useEffect(() => {
    if (getChambers) {
      setChambers(getChambers?.data);
    }
  }, [getChambers]);

  const onEdit = (chamber) => {
    // console.log("Chamber is : ", chamber);
    Object.keys(chamber).forEach((key) => {
      if (key == "available_days") {
        const days = JSON.parse(chamber[key]);
        console.log("days is :", days);
        setValue(key, days);
      } else {
        setValue(key, chamber[key]);
      }
    });
    setEditChamber(chamber);
  };

  const submit = () => {
    const formValues = getValues();

    const submitData = {};
    Object.keys(formValues).forEach((key) => {
      if (formValues[key]) {
        submitData[key] = formValues[key];
      }
    });
    submitData.dr_id = doctor?.id;

    if (editChamber) {
      delete submitData.updated_at;
      delete submitData.created_at;
      delete submitData.uuid;
      updateChamber({ id: editChamber?.id, data: submitData });
    } else {
      createChamber(submitData);
    }
  };

  useEffect(() => {
    refetchChambers();
  }, []);

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
      resetAndClose();
      refetchChambers();
      refetchChambers();
      success("Profile updated successfully");
    }
  }, [updateStatus, updateSuccess, updateError]);

  useEffect(() => {
    if (createError) {
      if (createError.status == 400) {
        createError.data.error.map((er) => {
          return error(er);
        });
      }
      if (createError.status == 500) {
        error("Server Error : 500");
      }
    }
    if (createSuccess) {
      resetAndClose();
      refetchChambers();
      success("Profile updated successfully");
    }
  }, [createStatus]);

  useEffect(() => {
    if (deleteError) {
      if (deleteError.status == 400) {
        deleteError.data.error.map((er) => {
          return error(er);
        });
      }
      if (deleteError.status == 500) {
        error("Server Error : 500");
      }
    }
    if (deleteSucces) {
      resetAndClose();
      refetchChambers();
      success("Profile updated successfully");
    }
  }, [deleteStatus]);

  console.log("Form Value is : ", getValues());

  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <div
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0, color: "#006BB1" }}>Chambers</p>{" "}
              <Button
                type="primary"
                style={{ fontSize: ".7rem", backgroundColor: "#006BB1" }}
                size="small"
              >
                Add Chamber
              </Button>
            </div>
          }
          style={{ padding: "0px 0px" }}
        >
          <Collapse
            style={{ backgroundColor: "white" }}
            bordered={false}
            accordion
          >
            {chambers?.map((chamber, index) => {
              return (
                <Panel
                  header={
                    <div>
                      <p style={{ margin: 0, fontWeight: "500" }}>
                        Nalabta Community clinic- Raypura
                      </p>
                      <p style={{ margin: 0 }}>Narsingdi</p>
                    </div>
                  }
                  key={index}
                >
                  <div>
                    <div>
                      <p style={{ margin: 0, fontSize: ".7rem" }}>Address</p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: ".8rem",
                          fontWeight: "500",
                          color: "#616161",
                        }}
                      >
                        Raypura, Narsingdi
                      </p>
                      <Divider style={{ margin: "5px 0px" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: ".7rem" }}>
                        Appointment Booking Number
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: ".8rem",
                          fontWeight: "500",
                          color: "#616161",
                        }}
                      >
                        0{chamber?.assistant_no}
                      </p>
                      <Divider style={{ margin: "5px 0px" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: ".7rem" }}>
                        Available Days
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: ".8rem",
                          fontWeight: "500",
                          color: "#616161",
                        }}
                      >
                        {chamber?.available_days &&
                          JSON.parse(chamber?.available_days).map(
                            (c, index) => `${index == 0 ? "" : ","} ${c}`
                          )}
                      </p>
                      <Divider style={{ margin: "5px 0px" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: ".7rem" }}>
                        Available Time
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: ".8rem",
                          fontWeight: "500",
                          color: "#616161",
                        }}
                      >
                        {chamber?.start_time} - {chamber?.end_time}
                      </p>
                      <Divider style={{ margin: "5px 0px" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: ".7rem" }}>
                        Consultaion Duration
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: ".8rem",
                          fontWeight: "500",
                          color: "#616161",
                        }}
                      >
                        {chamber?.consultation_duration}
                      </p>
                      <Divider style={{ margin: "5px 0px" }} />
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: ".7rem" }}>
                          In-clinic consultation fee
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "1.2rem",
                            fontWeight: "500",
                            color: "#2ECD71",
                          }}
                        >
                          ৳ {chamber?.fee_regular}
                        </p>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: ".7rem" }}>
                          Follow-up fee
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "1.2rem",
                            fontWeight: "500",
                            color: "#2ECD71",
                          }}
                        >
                          ৳ {chamber?.follow_up_fee}
                        </p>
                      </div>
                    </div>
                    {/* <Divider style={{ margin: "5px 0px" }} /> */}
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <Button
                        size="small"
                        style={{
                          fontSize: ".6rem",
                          color: "red",
                          borderColor: "red",
                          fontWeight: 400,
                        }}
                      >
                        <Popconfirm
                          title="Are you sure to delete this chamber?"
                          onConfirm={() => deleteChamber(chamber?.id)}
                          // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          Delete
                        </Popconfirm>
                      </Button>
                      <Button
                        size="small"
                        style={{
                          fontSize: ".6rem",
                          color: "#006BB1",
                          borderColor: "#006BB1",
                          fontWeight: 400,
                        }}
                        onClick={() => onEdit(chamber)}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button
            onClick={() => setAddChamber(true)}
            type="primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            Add New Chamber
          </Button>
        </div>
      </div>

      <Modal
        title="Add New Chamber"
        centered
        open={isAddChmaber || editChamber}
        onOk={() => submit()}
        onCancel={() => {
          resetAndClose();
        }}
        okText="Add"
      >
        <Form ref={formRef} layout="vertical">
          <Form.Item style={{ marginBottom: "5px" }}>
            <Card style={{padding:"0px"}}>
              <p style={{ fontWeight: "500", margin: 0 }}>Hospital : </p>
              <p style={{ fontWeight: "400", margin: 0 }}>Address : </p>
              <Button onClick={()=>setIsHospital(true)} type="primary" style={{marginTop:"5px"}}>Add/Change</Button>
            </Card>
          </Form.Item>

          <Form.Item style={{ marginBottom: "5px" }} label="Additional Address">
            <input
              {...register("add_address")}
              type="text"
              className="form-control"
            />
          </Form.Item>

          <Form.Item
            label="Appointment Booking Number"
            style={{ marginBottom: "5px" }}
          >
            <input
              {...register("assistant_no")}
              type="text"
              className="form-control"
            />
          </Form.Item>

          <Form.Item label="Availabe Days" style={{ marginBottom: "5px" }}>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Availabe Days"
              value={watch("available_days")}
              onChange={(value) => setValue("available_days", value)}
              options={options}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }} label="Start & End time">
            <div style={{ display: "flex", width: "100%", gap: "5px" }}>
              {/* <Form.Item name="start_time" style={{ marginBottom: "5px", }}> */}
              <TimePicker
                style={{ width: "100%" }}
                value={
                  watch("start_time") && moment(watch("start_time"), format)
                }
                format={format}
                onChange={(time, timeString) => {
                  setValue("start_time", timeString);
                }}
                placeholder="Start Time"
              />
              {/* </Form.Item> */}
              {/* <Form.Item name="start_time" style={{marginBottom: "5px" }}> */}
              <TimePicker
                value={watch("end_time") && moment(watch("end_time"), format)}
                format={format}
                placeholder="End Time"
                style={{ width: "100%" }}
                onChange={(time, timeString) => {
                  setValue("end_time", timeString);
                }}
              />
              {/* </Form.Item> */}
            </div>
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "5px" }}
            label="Consultaion duration"
          >
            <Select
              //   mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              defaultValue={watch("consultation_duration")}
              onChange={(value) => setValue("consultation_duration", value)}
              options={[
                { label: "15 mins", value: "15 mins" },
                { label: "20 mins", value: "20 mins" },
                { label: "30 mins", value: "30 mins" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Room No." style={{ marginBottom: "5px" }}>
            <input
              {...register("room_no")}
              type="number"
              className="form-control"
            />
          </Form.Item>
          <Form.Item label="Regular Fee" style={{ marginBottom: "5px" }}>
            <input
              {...register("fee_regular")}
              type="number"
              className="form-control"
            />
          </Form.Item>
          <Form.Item label="Follow Up Fee" style={{ marginBottom: "5px" }}>
            <input
              {...register("follow_up_fee")}
              type="number"
              className="form-control"
            />
          </Form.Item>
          <Form.Item label="Report Fee" style={{ marginBottom: "5px" }}>
            <input
              {...register("report_fee")}
              type="number"
              className="form-control"
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Hospital"
        centered
        open={isHospital}
        // onOk={() => submit()}
        onCancel={() => {
          setIsHospital(false)
        }}
        okText="Add"
        footer={null}
      >
        <HospitalForm />
      </Modal>
    </>
  );
};

export default Chambers;
