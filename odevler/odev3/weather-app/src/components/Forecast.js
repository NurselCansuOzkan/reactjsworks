import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ items }) {
  console.log("items", items);
  return (
    <div>

      <div className="forecast-container">
        {items.map((item, index) => (

            <div className="forecast-element">
              <div className="forecast-data">
              <div className="forecast-time">{item.time}</div>
                <div className="forecast-image">
                  <img src={iconUrlFromCode(item.icon)} alt="" />
                </div>
                <div className="forecast-description">{item.desc}</div>
                <div className="forecast-temp">{item.temp} °C</div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Forecast;
