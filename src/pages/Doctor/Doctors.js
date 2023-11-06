import React from "react";
import { Button, Space, Table, Tag, Card, Divider } from "antd";
import FilterSection from "../../views/Filter/FilterSection";
import { NavLink } from "react-router-dom";

const Doctors = () => {
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

  const data = [
    {
      id: 1,
      territory_code: 123,
      name: "John Doe",
      address: "123 Main St",
      mobile: "555-555-5555",
      designation: "Manager",
    },
    {
      id: 2,
      territory_code: 456,
      name: "Jane Smith",
      address: "456 Elm St",
      mobile: "555-555-5556",
      designation: "Salesperson",
    },
    {
      id: 3,
      territory_code: 789,
      name: "Robert Johnson",
      address: "789 Oak St",
      mobile: "555-555-5557",
      designation: "Supervisor",
    },
    {
      id: 4,
      territory_code: 1011,
      name: "Sarah Davis",
      address: "101 Pine St",
      mobile: "555-555-5558",
      designation: "Assistant Manager",
    },
    {
      id: 5,
      territory_code: 1213,
      name: "Michael Brown",
      address: "222 Cedar St",
      mobile: "555-555-5559",
      designation: "Clerk",
    },
    {
      id: 6,
      territory_code: 1415,
      name: "Lisa Wilson",
      address: "333 Birch St",
      mobile: "555-555-5560",
      designation: "Associate",
    },
    {
      id: 7,
      territory_code: 1617,
      name: "David Lee",
      address: "444 Redwood St",
      mobile: "555-555-5561",
      designation: "Technician",
    },
    {
      id: 8,
      territory_code: 1819,
      name: "Emily Miller",
      address: "555 Maple St",
      mobile: "555-555-5562",
      designation: "Coordinator",
    },
    {
      id: 9,
      territory_code: 2021,
      name: "William Harris",
      address: "666 Spruce St",
      mobile: "555-555-5563",
      designation: "Engineer",
    },
    {
      id: 10,
      territory_code: 2223,
      name: "Jennifer Jones",
      address: "777 Walnut St",
      mobile: "555-555-5564",
      designation: "Analyst",
    },
  ];

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
        {data?.map((d) => {
          return (
            <NavLink to="/doctors/profile">
              <Card style={{ padding: "0", marginBottom: "5px", cursor:"pointer"}}>
                <div
                  style={{ display: "flex", alignItems: "start", gap: "15px" }}
                >
                  <div>
                    <img
                      style={{ height: "45px", width: "45px" }}
                      src="/icons/doctor.png"
                    />
                  </div>
                  <div>
                    <p
                      style={{ margin: 0, fontWeight: "600", color: "#3F51B5" }}
                    >
                      Mr. Prof Doctor
                    </p>
                    {/* <Divider style={{ margin: "2px 0px" }} /> */}
                    {/* <p style={{ margin: 0 }}>Shop Owner : Mr. Owner </p> */}
                    <p style={{ margin: 0, fontSize: ".8rem", color: "gray" }}>
                      Hospital : Labaid Hospital
                    </p>
                    <p style={{ margin: 0, fontSize: ".8rem", color: "gray" }}>
                      Address : Dhaka, Narsingdi, Monohardi
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
