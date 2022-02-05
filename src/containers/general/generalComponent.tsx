import React, { useState } from "react";
import Togglegroup from "../../sharedcomponents/fragments/togglegroup/togglegroup";

export default function GeneralComponenet() {
  const [iscashManagementChecked, setiscashManagementChecked] = useState(false);
  const [isMapTimeLineChecked, setisMapTimeLineChecked] = useState(false);
  const [isviewsBrefingsChecked, setisviewsBrefingsChecked] = useState(false);
  const [isnotificationsChecked, setisnotificationsChecked] = useState(false);
  const [ismasscommunicationsChecked, setismasscommunicationsChecked] =
    useState(false);
  const [istrafficcamerasChecked, setistrafficcamerasChecked] = useState(false);

  const onnotificationsChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisnotificationsChecked(checked);
    if (!checked) {
    }
  };
  const onmasscommunicationsChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setismasscommunicationsChecked(checked);
    if (!checked) {
    }
  };
  const ontrafficcamerasChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setistrafficcamerasChecked(checked);
    if (!checked) {
    }
  };

  const oncashManagementChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setiscashManagementChecked(checked);
    if (!checked) {
    }
  };

  const onMapTimeLineChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisMapTimeLineChecked(checked);
    if (!checked) {
    }
  };

  const onviewsBrefingsChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisviewsBrefingsChecked(checked);
    if (!checked) {
    }
  };

  const cashManagement = [
    {
      textDisplay: "CASE MANAGEMENT",
      controlId: "Toggle1",
      isChecked: iscashManagementChecked,
      onChanged: oncashManagementChange,
      selects: [],
    },
  ];
  const mapTimeLine = [
    {
      textDisplay: "MAP TIMELINE",
      controlId: "mappTimeline",
      isChecked: isMapTimeLineChecked,
      onChanged: onMapTimeLineChange,
      selects: [],
    },
  ];
  const viewsBrefings = [
    {
      textDisplay: "VIEWS AND BREFINGS",
      controlId: "viewsBrefings",
      isChecked: isviewsBrefingsChecked,
      onChanged: onviewsBrefingsChange,
      selects: [],
      childrens: [],
    },
  ];
  const notifications = [
    {
      textDisplay: "NOTIFICATIONS",
      controlId: "notifications",
      isChecked: isnotificationsChecked,
      onChanged: onnotificationsChange,
      selects: [],
      childrens: [],
    },
  ];
  const masscommunications = [
    {
      textDisplay: "MASS COMMUNICATIONS",
      controlId: "masscommunications",
      isChecked: ismasscommunicationsChecked,
      onChanged: onmasscommunicationsChange,
      selects: [],
      childrens: [],
    },
  ];
  const trafficcameras = [
    {
      textDisplay: "TRAFIC CAMERAS",
      controlId: "trafficcameras",
      isChecked: istrafficcamerasChecked,
      onChanged: ontrafficcamerasChange,
      selects: [],
      childrens: [],
    },
  ];

  return (
    <div className="d-flex flex-wrap flex-row mb-3" style={styles.container}>
      <div className="p-2">
        <Togglegroup togglegroup={cashManagement}></Togglegroup>
      </div>
      <div className="p-2">
        <Togglegroup togglegroup={mapTimeLine}></Togglegroup>
      </div>
      <div className="p-2">
        <Togglegroup togglegroup={viewsBrefings}></Togglegroup>
      </div>
      <div className="p-2">
        <Togglegroup togglegroup={notifications}></Togglegroup>
      </div>
      <div className="p-2">
        <Togglegroup togglegroup={masscommunications}></Togglegroup>
      </div>
      <div className="p-2">
        <Togglegroup togglegroup={trafficcameras}></Togglegroup>
      </div>
    </div>
  );
}

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    gap: ".25rem 1rem",
    backgroundColor: "211e1e",
  },
};
