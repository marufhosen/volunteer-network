import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddEvents.css";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imgUrl: imageUrl,
    };
    const url = "http://localhost:8000/addEvent";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
  const handdleImgUplode = (event) => {
    const imageData = new FormData();
    imageData.set("key", "0d06443c1e3c2409ef83bc2824a5be1e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="events-input-forms">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="New Event" {...register("name")} />
          <br />
          <br />
          <input
            name="exampleRequired"
            type="file"
            onChange={handdleImgUplode}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
