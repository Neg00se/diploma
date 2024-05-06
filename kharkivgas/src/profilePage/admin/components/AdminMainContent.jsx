import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../../../features/adminProfile/adminApiSlice";

const AdminMainContent = () => {
  const { data, isLoading } = useGetUsersQuery();

  const rows = data;

  const columns = [
    {
      field: "firstName",
      headerName: "Ім'я",
      flex: 0.3,
    },
    {
      field: "lastName",
      headerName: "Прізвище",
      flex: 0.3,
    },
    {
      field: "personalCode",
      headerName: "особовий рахунок",
      flex: 0.4,
    },
    { field: "email", headerName: "Email", flex: 0.4 },
    { field: "address", headerName: "адреса", flex: 0.5 },
  ];

  const content = isLoading ? (
    <Container>
      <div className="spinner d-flex justify-content-center align-items-center">
        <h1>Loading &nbsp;</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  ) : (
    <Container className=" ">
      <Row className="mt-4">
        <Col className="col-11 mx-auto">
          <DataGrid
            autoHeight
            className="bg-white px-2"
            disableColumnMenu
            disableRowSelectionOnClick
            disableColumnResize
            autosizeOptions={{
              includeHeaders: true,
              includeOutliers: true,
              expand: true,
            }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50]}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Col>
      </Row>
    </Container>
  );

  return content;
};

export default AdminMainContent;
