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
} from "antd";
import { AiOutlineCloudUpload, AiFillSave } from "react-icons/ai";
import dayjs from "dayjs";
import moment from "moment";

import "../../pages/Doctor/profile.css";
import {
  useCreateChamberMutation,
  useGetChambersQuery,
} from "../../redux/features/chamber/chamberApi";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

const Chambers = ({ doctor }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [chambers, setChambers] = useState([]);

  const { data: getChambers, refetch: refetchChambers } = useGetChambersQuery(
    doctor?.id
  );
  const [createChamber, { error: createError, status: createStatus }] =
    useCreateChamberMutation();

  const [isAddChmaber, setAddChamber] = useState(false);
  const [editChamber, setEditChamber] = useState();

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

  useEffect(() => {
    if (getChambers) {
      setChambers(getChambers?.data);
    }
  }, [getChambers]);

  const onEdit = (chamber) => {
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

    createChamber(submitData);
  };

  useEffect(() => {
    refetchChambers();
  }, []);

  console.log("data Error is : ", chambers);

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
            {chambers?.map((chamber) => {
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
                  key="1"
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
                        Delete
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
          setAddChamber(false)
          setEditChamber(false)
        }}
        okText="Add"
      >
        <Form layout="vertical">
          <Form.Item label="Hospital" style={{ marginBottom: "5px" }}>
            <input
              {...register("hospital_id")}
              type="number"
              className="form-control"
            />
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
              defaultValue={watch("available_days")}
              onChange={(value) => setValue("available_days", value)}
              options={options}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }} label="Start & End time">
            <div style={{ display: "flex", width: "100%", gap: "5px" }}>
              {/* <Form.Item name="start_time" style={{ marginBottom: "5px", }}> */}
              <TimePicker
                style={{ width: "100%" }}
                defaultValue={
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
                defaultValue={
                  watch("end_time") && moment(watch("end_time"), format)
                }
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
    </>
  );
};

export default Chambers;
