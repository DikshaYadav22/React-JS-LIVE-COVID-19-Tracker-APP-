import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, CardTitle, CardBody } from "reactstrap";

const CountryData = () => {
  const [singleCountryData, setSingleCountryData] = useState([]);

  useEffect(() => {
    loadCountriesData();
  }, []);

  const loadCountriesData = async () => {
    const res = await axios.get("https://api.covid19api.com/summary");
    if (res.data.Countries) {
      let output = res.data.Countries.filter(
        (data) => data.Country === "India"
      );
      if (output) {
        setSingleCountryData(output);
      }
    }
  };
  const renderCountryData = () => {
    return singleCountryData.map((item, index) => {
      return (
        <Container
          className="shadowDesign text-center text-white p-5 mt-2 shadow-lg"
          key={index}
        >
          <h1 className=" title text-center m-2">
            LIVE COVID-19 CORONAVIRUS TRACKER
          </h1>
          <Row className="m-5 shadow-lg">
            <Col>
              <Card style={{ backgroundColor: "#4D6FC2" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>Our &nbsp;&nbsp;</span>
                  <strong className="text-uppercase">Country</strong>
                </CardTitle>

                <CardBody>
                  <h1 className="text-uppercase">{item.Country}</h1>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: "#4A933F" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>
                    Total &nbsp;&nbsp;
                  </span>
                  <strong className="text-uppercase">Recovered</strong>
                </CardTitle>
                <CardBody>
                  <h1>{item.TotalRecovered}</h1>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: "#BDA92D" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>
                    Total &nbsp;&nbsp;
                  </span>
                  <strong className="text-uppercase">Confirmed</strong>
                </CardTitle>
                <CardBody>
                  <h1>{item.TotalConfirmed}</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className=" shadow-lg m-5">
            <Col>
              <Card style={{ backgroundColor: "#4A933F" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>
                    Total &nbsp;&nbsp;
                  </span>
                  <strong className="text-uppercase">Deaths</strong>
                </CardTitle>
                <CardBody>
                  <h1>{item.TotalDeaths}</h1>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: "#DB682C" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>
                    Total &nbsp;&nbsp;
                  </span>
                  <strong className="text-uppercase">Active</strong>
                </CardTitle>
                <CardBody>
                  <h1>{item.TotalConfirmed - item.TotalRecovered}</h1>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: "#A69854" }} className="p-2">
                <CardTitle>
                  <span style={{ fontSize: "x-small" }}>New &nbsp;&nbsp;</span>
                  <strong className="text-uppercase">Deaths</strong>
                </CardTitle>
                <CardBody>
                  <h1>{item.NewDeaths}</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    });
  };

  return <Card>{singleCountryData.length > 0 ? renderCountryData() : []}</Card>;
};

export default CountryData;
