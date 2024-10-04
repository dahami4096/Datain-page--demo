import React from "react";
import "./page.css";

const Page = () => {
  return (
    <div className="dtcontainer ">
      <h1 className="text-center">Reports</h1>

      <div className="topl">
        <h4>Limited Data  </h4>
      </div>
      
      <div className="topl">
        <h4>Grayscale Images  </h4>
      </div>
      

      <div className="dmenu">
        <label htmlFor="exampleFormControlSelect1">Class Distribution : </label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Balanced</option>
          <option>Imbalanced</option>

        </select>
      </div>
      <div className="dmenu">
        <label htmlFor="exampleFormControlSelect1">Noise Level of Images : </label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>High</option>
          <option>Low</option>

        </select>
      </div>


      <button className="btn-down">Submit</button>
    </div>
  );
};

export default Page;
