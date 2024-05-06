import React from "react";
import { useGetCommunalsQuery } from "../../../features/communals/communalsApiSlice";
import {
  ResponsiveChartContainer,
  LineChart,
  axisClasses,
} from "@mui/x-charts";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const ConsumeChart = () => {
  const { gasData, isLoading } = useGetCommunalsQuery("getCommunals", {
    selectFromResult: ({ data }) => ({
      gasData: data.map((x) => ({
        date: new Date(x.startDate),
        gasUsed: x.gasUsed,
      })),
    }),
  });

  const content = isLoading ? (
    <div className="spinner d-flex justify-content-center align-items-center">
      <h1>Loading &nbsp;</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Row>
      <Col className="bg-white col-10  mx-auto border">
        <LineChart
          height={500}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "date",
              valueFormatter: (date, context) =>
                context.location === "tick"
                  ? `${date.toLocaleString("default", {
                      month: "long",
                    })} \n ${date.toLocaleString("default", {
                      year: "numeric",
                    })}`
                  : `${date.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}  `,
            },
          ]}
          series={[
            {
              dataKey: "gasUsed",
              curve: "linear",
              label: "Споживання газу",
            },
          ]}
          yAxis={[
            {
              label: "газу спожито м3",
            },
          ]}
          sx={{
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: "translateX(-10px)",
            },
          }}
          dataset={gasData}
        />
      </Col>
    </Row>
  );

  return <Container className="mt-4">{content}</Container>;
};

export default ConsumeChart;
