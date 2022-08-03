import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  //  console.log(props.lat);
  // console.log(season);
  // const text =
  //   season === "winter" ? "Burr it is chilly" : "let's hit the beach";
  // const icon = season === "winter" ? "snowflake" : "sun";
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left  massive ${iconName} icon`}></i>
      <h3>{season}</h3>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
      {/* <h2>{props.lat}</h2> */}
    </div>
  );
}

export default SeasonDisplay;
