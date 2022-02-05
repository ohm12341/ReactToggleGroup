import React, { useState } from "react";
import Togglegroup from "../../sharedcomponents/fragments/togglegroup/togglegroup";
import Typography from "@mui/material/Typography";

export default function SettingsComponenet() {
  const [isAuditChecked, setisAuditChecked] = useState(false);
  const [isuserAddChecked, setisuserAddChecked] = useState(false);
  const [isuserDeleteChecked, setisuserDeleteChecked] = useState(false);
  const [isuserEditChecked, setisuserEditChecked] = useState(false);
  const [ismaxUserChecked, setismaxUserChecked] = useState(false);
  const [isuserChecked, setisuserChecked] = useState(false);

  const onuserAddChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisuserAddChecked(checked);
    if (!checked) {
    }
  };

  const onuserDeleteChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisuserDeleteChecked(checked);
    if (!checked) {
    }
  };

  const onuserEditChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisuserEditChecked(checked);
    if (!checked) {
    }
  };

  const onmaxUserChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setismaxUserChecked(checked);
    if (!checked) {
    }
  };

  const onAuditChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisAuditChecked(checked);
    if (!checked) {
    }
  };

  const onuserChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setisuserChecked(checked);
    if (!checked) {
    }
  };

  const settings = [
    {
      textDisplay: "AUDIT",
      controlId: "Audit",
      isChecked: isAuditChecked,
      onChanged: onAuditChange,
      selects: [],
      childrens: [],
    },
    {
      textDisplay: "USERS",
      controlId: "user",
      isChecked: isuserChecked,
      onChanged: onuserChange,
      selects: [],
      childrens: [
        {
          textDisplay: "USER ADD",
          controlId: "userAdd",
          isChecked: isuserAddChecked,
          onChanged: onuserAddChange,
          selects: [],
        },
        {
          textDisplay: "USER DELETE",
          controlId: "userDelete",
          isChecked: isuserDeleteChecked,
          onChanged: onuserDeleteChange,
          selects: [],
        },
        {
          textDisplay: "USER EDIT",
          controlId: "useEdit",
          isChecked: isuserEditChecked,
          onChanged: onuserEditChange,
          selects: [],
        },
        {
          textDisplay: "MAX USER",
          controlId: "maxUser",
          isChecked: ismaxUserChecked,
          onChanged: onmaxUserChange,
          selects: [
            {
              numberarray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="d-flex flex-wrap flex-row mb-3" style={styles.container}>
      <div className="p-2">
        <Togglegroup togglegroup={settings}></Togglegroup>
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
