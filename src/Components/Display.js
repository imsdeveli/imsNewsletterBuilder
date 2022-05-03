import React from "react";
import ATN from "../Templates/ATN.js";
import OTR from "../Templates/OTR.js";
import PTR from "../Templates/PTR.js";
import TCI from "../Templates/TCI.js";
import WIA from "../Templates/WIA.js";

// import "../styles.css";

import Preview from "./Preview";

const Display = (props) => {
  console.log("display Props", props);

  let template = props.state.template;

  const Blank = () => {
    return (
      <div>
        <h1>Please enter a valid Template</h1>
      </div>
    );
  };

  let templateString = Blank;

  switch (template) {
    case "ATN":
      templateString = ATN(props);
      break;
    case "OTR":
      templateString = OTR(props);
      break;
    case "PTR":
      templateString = PTR(props);
      break;
    case "TCI":
      templateString = TCI(props);
      break;
    case "WIA":
      templateString = WIA(props);
      break;
    default:
      templateString = Blank();
      break;
  }

  let stringed = templateString.toString();
  console.log("template", template);
  function handleCopyClick() {
    /* Save value of myText to input variable */
    var input = stringed;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);

    alert("Copied Text: " + input);
  }

  // console.log("TemplateString:", templateString);
  return (
    <div className="Display">
      <div class="row">
        <div class="col">
          <div>{props.state.template}</div>
          <div id="copyMe">{templateString}</div>
          <button onClick={handleCopyClick}> Copy HTML to clipboard </button>
        </div>
        <div class="col">
          <Preview templateString={templateString} />
        </div>
      </div>
    </div>
  );
};

export default Display;
