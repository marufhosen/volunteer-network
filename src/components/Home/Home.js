import React, { useEffect, useState } from "react";
import "./Home.css";
import Events from "../Events/Events";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/newEvents")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="event-container">
      {events.map((ev) => (
        <Events key={ev._id} event={ev}></Events>
      ))}
    </div>
  );
};

export default Home;
