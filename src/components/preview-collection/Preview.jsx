import Item from "../collection-item/Item";
import "./Preview.scss";
import React from "react";

const Preview = ({ title, items }) => {
  return (
    <div className="preview-collections">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Preview;
