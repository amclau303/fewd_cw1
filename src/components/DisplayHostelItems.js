import React from "react";
import HostelItem from "./HostelItem";
import Accordion from "react-bootstrap/Accordion";

const DisplayHostelItems = ({ items }) => {
  return (
    <Accordion>
      {items.map((hostel,index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <HostelItem hostel={hostel} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayHostelItems;