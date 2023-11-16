import { useEffect, useState } from "react";
import { Button, Card, Divider, Space, Table, Tag } from "antd";
import FilterSection from "../../views/Filter/FilterSection";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetChemistsQuery } from "../../redux/features/chemist/doctorApi";

const Chemists = () => {
  const user = useSelector((state) => state?.user?.data);

  const [chemists, setChemists] = useState([]);

  const { data: getChemists } = useGetChemistsQuery(user?.work_area_t);

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
        <p style={{ margin: "0", fontWeight: "700" }}>{text}</p>
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
          <NavLink to="/chemist/profile">
            <Button>Profile</Button>
          </NavLink>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (getChemists?.data) {
      setChemists(getChemists?.data);
    }
  }, [getChemists]);

  return (
    <div>
      {/* <FilterSection userType="chemist" /> */}
      <h5 style={{ color: "#3F51B5" }}>Chemists </h5>
      <div className="table-responsive">
        {/* <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        className="ant-border-space"
        size="small"
      /> */}
        {chemists?.map((c) => {
          return (
            <NavLink to="/chemists/profile">
              <Card style={{ padding: "0", marginBottom: "5px" }}>
                <p style={{ margin: 0, fontWeight: "600", color: "#3F51B5" }}>
                  {c?.name1 || "Name"}
                </p>
                <Divider style={{ margin: "2px 0px" }} />
                <p style={{ margin: 0 }}>Shop Owner : {c?.contact_person} </p>
                <p style={{ margin: 0, fontSize: ".8rem", color: "gray" }}>
                  Address : {c?.street1}, {c?.street2}
                </p>
              </Card>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Chemists;
