import React from "react";
import Map from "./Map";
import DisplayHostelList from "./DisplayHostelList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Index() {
  return (
    <Container>
      <Row>
        <Col>
          <h1> Index Page</h1>
        </Col>
        <Col id="map">
          <h1>Where we are</h1>
          <Col><Map /></Col>
        </Col>
        <Col class="d-flex">
          <h1>Hostel List</h1>
          <DisplayHostelList />
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
