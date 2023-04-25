import React from "react";
import Directory from "../../components/directory/Directory";
import "./Homepage.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const Homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
