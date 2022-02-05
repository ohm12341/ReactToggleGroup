import React, { useState } from "react";
import GeneralComponenet from "./general/generalComponent";
import SettingsComponenet from "./settings/settings";
import AlertComponenet from "./alerts/alert";
import CSS from "csstype";

export default function NewsletterStates() {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="p-2">
        <h3 style={h3style}>GENERAL</h3>
        <GeneralComponenet></GeneralComponenet>
      </div>
      <div className="p-2 flex-shrink-1">
        <h3 style={h3style}>SETTINGS</h3>
        <SettingsComponenet></SettingsComponenet>
      </div>
      <div className="p-2 flex-shrink-1">
        <h3 style={h3style}>ALERTS</h3>
        <AlertComponenet></AlertComponenet>
      </div>
    </div>
  );
}
const h3style: CSS.Properties = {
  color: "white",
  fontFamily: "Industry",
};
