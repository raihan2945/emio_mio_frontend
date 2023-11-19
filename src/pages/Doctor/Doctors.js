import React from "react";
import { Button, Space, Table, Tag, Card, Divider } from "antd";
import FilterSection from "../../views/Filter/FilterSection";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetDoctorsQuery } from "../../redux/features/doctor/doctorApi";
import { useState } from "react";
import { useEffect } from "react";

const Doctors = () => {

  const user= useSelector(state=>state?.user?.data);

  const [doctors, setDoctors] = useState([])

  const {data:getDoctors} =useGetDoctorsQuery(user?.work_area_t);

  console.log("Get doctors are : ", getDoctors)

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>#{text}</a>,
    },
    {
      title: "Territory",
      dataIndex: "teritory",
      key: "teritory",
      render: (text) => (
        <p style={{ margin: "0", fontWeight: "700", color: "green" }}>
          #{text}
        </p>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <p style={{ margin: "0", fontWeight: "700" }}>Dr. {text}</p>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      render: (designation) => (
        <>
          <Tag color={"green"}>{designation}</Tag>
        </>
      ),
    },
    // {
    //   title: "Status",
    //   key: "status",
    //   dataIndex: "status",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>Profile</Button>
        </Space>
      ),
    },
  ];

  useEffect(()=>{
    if(getDoctors?.data){
      setDoctors(getDoctors?.data)
    }
  },[getDoctors])

  return (
    <div>
      {/* <FilterSection userType="doctor" /> */}
      <h5 style={{ color: "#3F51B5" }}>Doctors </h5>
      <div className="table-responsive">
        {/* <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        className="ant-border-space"
      /> */}
        {doctors?.map((d) => {
          return (
            <NavLink to="/doctors/profile">
              <Card style={{ padding: "0", marginBottom: "5px", cursor:"pointer"}}>
                <div
                  style={{ display: "flex", alignItems: "start", gap: "15px" }}
                >
                  <div style={{flex:1}}>
                    <img
                      style={{ height: "45px", width: "45px" }}
                      src="/icons/doctor.png"
                    />
                  </div>
                  <div style={{flex:5}}>
                    <p
                      style={{ margin: 0, fontWeight: "500", color: "#7F7F7F" }}
                    >
                     id : #{d.dr_master_id}
                    </p>
                    <p
                      style={{ margin: 0, fontWeight: "600", color: "#3F51B5" }}
                    >
                      {d?.title}{d?.doctor_name1}
                    </p>
                    {/* <Divider style={{ margin: "2px 0px" }} /> */}
                    {/* <p style={{ margin: 0 }}>Shop Owner : Mr. Owner </p> */}
                   
                    <p style={{ margin: 0, fontSize: ".8rem", color: "#383838" }}>
                      <strong>Chamber</strong> :{d?.ch_addr1}
                    </p>
                  </div>
                </div>
              </Card>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
