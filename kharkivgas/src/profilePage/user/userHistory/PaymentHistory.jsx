import React, { useState } from "react";
import { DataGrid, GridAddIcon } from "@mui/x-data-grid";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useGetCommunalsQuery } from "../../../features/communals/communalsApiSlice";

const PaymentHistory = () => {
  const { communals, isLoading } = useGetCommunalsQuery("getCommunals", {
    selectFromResult: ({ data }) => ({
      communals: Array.from(data).reverse(),
    }),
  });

  const [year, setYear] = useState(2024);

  const columns = [
    {
      field: "month",
      flex: 0.7,
      headerName: "Місяць",
      sortable: false,
      valueGetter: (value, row) => {
        let date = new Date(row.startDate);
        return date.toLocaleString("default", { month: "long" });
      },
    },
    {
      field: "rateName",
      headerName: "Тарифний план",
      sortable: false,
      flex: 0.5,
    },
    {
      field: "ratePrice",
      headerName: "Ціна м3,грн",
      sortable: false,
      flex: 0.5,
    },
    {
      field: "gasUsed",
      headerName: "Спожито",
      flex: 0.5,
    },
    {
      field: "toPay",
      headerName: "До Сплати",
      flex: 0.5,
    },
    {
      field: "payed",
      headerName: "Сплачено",
      flex: 0.5,
    },
    {
      field: "isPayed",
      headerName: "Оплата",
      type: "boolean",
      flex: 0.5,
      cellClassName: (params) => {
        if (params.value === false) {
          return "badge  my-auto rounded-pill text-bg-danger";
        } else {
          return "bg-success my-auto badge rounded-pill";
        }
      },
    },
  ];

  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  const rows = communals.filter((cp) => cp.startDate.includes(year));

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
    <Container className="mt-4">
      <Row className="mb-2">
        <Col className="col-11 mx-auto">
          <Row className="justify-content-end">
            <Col className="col-2">
              <Form>
                <Form.Select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                </Form.Select>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-11 mx-auto">
          <DataGrid
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
                paginationModel: { page: 0, pageSize: 12 },
              },
            }}
            pageSizeOptions={[12]}
            getRowSpacing={getRowSpacing}
          />
        </Col>
      </Row>
    </Container>
  );

  return content;
};

export default PaymentHistory;
