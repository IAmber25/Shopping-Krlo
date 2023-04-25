import { useState } from "react";
import "./Shop.scss";
import SHOP_DATA from "./shop-data";
import Preview from "../../../components/preview-collection/Preview";

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, ...otherprops }) => (
        <Preview key={id} {...otherprops} />
      ))}
    </div>
  );
};

export default Shop;
