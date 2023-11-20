import React, { useEffect } from "react";
import { Button, Card, Form, Select, TimePicker } from "antd";
import moment from "moment";

const ChamberForm = ({ chamber, register, watch, setValue, setIsHospital }) => {
  const format = "HH:mm";

  const options = [
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" },
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
  ];

  //   useEffect(() => {
  //     return () => {
  //         console.log("called================")
  //       if (chamber) {
  //         console.log("chamber is : ", chamber)
  //         Object.keys(chamber).forEach(key=>{
  //             setValue('key', undefined)
  //         })
  //       }
  //     };
  //   }, []);

  return (
    <Form layout="vertical">
      <Form.Item style={{ marginBottom: "5px" }}>
        <Card style={{ padding: "0px" }}>
          <p style={{ fontWeight: "500", margin: 0 }}>Hospital : </p>
          <p style={{ fontWeight: "400", margin: 0 }}>Address : </p>
          <Button
            onClick={() => setIsHospital(true)}
            type="primary"
            style={{ marginTop: "5px" }}
          >
            Add/Change
          </Button>
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
            value={watch("start_time") && moment(watch("start_time"), format)}
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

      <Form.Item style={{ marginBottom: "5px" }} label="Consultaion duration">
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
  );
};

export default ChamberForm;
