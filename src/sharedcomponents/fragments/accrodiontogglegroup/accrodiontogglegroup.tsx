import Select from "../../controls/dropedown/selectComponent";
import ToggleSwitch from "../../controls/togglebutton/ToggleButton";
import CSS from "csstype";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NormalTogglegroup from "../normaltogglegroup/normaltogglegroup";

const lableStyle: CSS.Properties = {
  color: "white",
  fontFamily: "Industry",
};
const iconStyle: CSS.Properties = {
  color: "white",
};
const accrodionStyle: CSS.Properties = {
  backgroundColor: "#4a3e3d",
  minWidth: "500px",
};
export default function AccrodionTogglegroup({ groupmetadata, children }: any) {
  return (
    <Accordion style={accrodionStyle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon style={iconStyle} />}>
        <div className="d-flex flex-row mb-3 flex-fill">
          <div className="p-2 flex-grow-1">
            <label style={lableStyle} htmlFor="newsletter">
              {groupmetadata.textDisplay}
            </label>
          </div>
          <div className="p-2 flex-grow-1">
            <div>
              <Select selects={groupmetadata.selects}></Select>
            </div>
          </div>
          <div className="p-2 flex-grow-4">
            <div>
              <ToggleSwitch
                id={groupmetadata.controlId}
                checked={groupmetadata.isChecked}
                onChange={groupmetadata.onChanged}
              />
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {children.map((value: any, index: number) => (
          <div key={index} className="d-flex flex-row justify-content-between">
            <NormalTogglegroup groupmetadata={value}></NormalTogglegroup>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
