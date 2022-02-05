import React, { useState } from "react";
import Togglegroup from "../../sharedcomponents/fragments/togglegroup/togglegroup";
import Typography from "@mui/material/Typography";

export default function AlertComponenet() {
  const [isalertmanagerChecked, setisalertmanagerChecked] = useState(false);
  const [isalertruleChecked, setisalertruleChecked] = useState(false);

  const onalertmanagerChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisalertmanagerChecked(checked);
    if (!checked) {
    }
  };

  const onalertruleChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisalertruleChecked(checked);
    if (!checked) {
    }
  };

  const alertmanager = [
    {
      textDisplay: "ALERT MANAGER",
      controlId: "alertmanager",
      isChecked: isalertmanagerChecked,
      onChanged: onalertmanagerChange,
      selects: [],
      childrens: [],
    },
    {
      textDisplay: "ALERT RULE",
      controlId: "alertrule",
      isChecked: isalertruleChecked,
      onChanged: onalertruleChange,
      selects: [
        {
          numberarray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
      childrens: [],
    },
  ];

  return (
    <div className="d-flex flex-wrap flex-row mb-3" style={styles.container}>
      <div className="p-2">
        <Togglegroup togglegroup={alertmanager}></Togglegroup>
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
