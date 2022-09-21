import React from "react";

function WeatherForecast({ img, conditions, time }) {
  return (
    <div className="weater">
      <img src={img} alt="" />
      <p>
        <span>conditions</span> {conditions}
      </p>
      <p>
        <span>time:</span> {time}
      </p>
    </div>
  );
}

export default WeatherForecast;