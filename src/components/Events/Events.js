import React from "react";
import { Card, Button } from "react-bootstrap";

const Events = (props) => {
  const { name, imgUrl } = props.event;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Events;
