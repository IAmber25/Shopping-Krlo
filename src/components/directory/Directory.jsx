import React, { useState } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/MenuItem";

const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: "1",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: "2",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: "3",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: "4",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: "5",
    },
  ],
};

const Directory = () => {
  const [sections, setSections] = useState(initialState.sections);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
