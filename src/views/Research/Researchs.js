import React, { useState } from "react";
import { Button, Card, Modal, Popconfirm } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import ResearchForm from "./ResearchForm";

import "./style.css";

const Researchs = () => {
  const [isCreate, setIsCreate] = useState(false);

  const [update, setUpdate] = useState(false);

  const cancelModal = () => {
    setIsCreate(false);
    setUpdate(null);
  };
  return (
    <div>
      <Card
        title="Researchs"
        extra={
          <Button
            type="primary"
            // style={{ backgroundColor: "#1a7ab9" }}
            size="small"
            onClick={() => setIsCreate(true)}
          >
            Add
          </Button>
        }
        style={{ backgroundColor: "" }}
      >
        <Card style={{ padding: "0", marginBottom: "5px", boxShadow: "none" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div style={{ flex: 5 }}>
              <p style={{ margin: 0 }}>
                {/* {d.degree_name}
                {d.sector_name && " in "} {d.sector_name} */}
                AAA ,dhaka medical college
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  padding: "3px 5px",
                  borderRadius: "3px",
                }}
                onClick={() => setUpdate(true)}
              >
                <AiFillEdit style={{ color: "green", fontSize: "1rem" }} />
              </div>
              <Popconfirm
                title="Delete the degree"
                description="Are you sure to delete this degree?"
                // onConfirm={() => deleteDegree(d.id)}
                okText="Yes"
                cancelText="No"
              >
                <div
                  style={{
                    border: "1px solid red",
                    padding: "3px 5px",
                    borderRadius: "3px",
                  }}
                >
                  <AiFillDelete style={{ color: "red", fontSize: "1rem" }} />
                </div>
              </Popconfirm>
            </div>
          </div>
        </Card>
      </Card>

      {/* -----Input form */}
      <Modal open={isCreate || update} onCancel={cancelModal} footer={null}>
        <ResearchForm cancel={cancelModal} />
      </Modal>
    </div>
  );
};

export default Researchs;
