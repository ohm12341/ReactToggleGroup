import Select from "../../controls/dropedown/selectComponent";
import ToggleSwitch from "../../controls/togglebutton/ToggleButton";
import CSS from "csstype";

const lableStyle: CSS.Properties = {
  color: "white",
  fontFamily: "Industry",
};

export default function NormalTogglegroup({ groupmetadata }: any) {
  return (
    <>
      <div className="p-2">
        <label style={lableStyle} htmlFor="newsletter">
          {groupmetadata.textDisplay}
        </label>
      </div>
      <div className="p-2">
        <div>
          <Select selects={groupmetadata.selects}></Select>
        </div>
      </div>
      <div className="p-2">
        <div>
          <ToggleSwitch
            id={groupmetadata.controlId}
            checked={groupmetadata.isChecked}
            onChange={groupmetadata.onChanged}
          />
        </div>
      </div>
    </>
  );
}
