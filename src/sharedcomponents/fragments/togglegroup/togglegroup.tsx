import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import NormalTogglegroup from "../normaltogglegroup/normaltogglegroup";
import AccrodionTogglegroup from "../accrodiontogglegroup/accrodiontogglegroup";
import CSS from "csstype";
import React from "react";

const cardStyle: CSS.Properties = {
  backgroundColor: "#4a3e3d",
  minWidth: "500px",
};

function Groups({ togglegroup, children }: any) {
  if (children && children.length > 0) {
    return (
      <AccrodionTogglegroup groupmetadata={togglegroup} children={children} />
    );
  }
  return <NormalTogglegroup groupmetadata={togglegroup}></NormalTogglegroup>;
}

export default function Togglegroup({ togglegroup }: any) {
  return (
    <>
      <MDBCard style={cardStyle}>
        <MDBCardBody>
          {togglegroup.map((value: any, index: number) => (
            <div
              key={index}
              className="d-flex flex-row mb-3 justify-content-between"
            >
              <Groups togglegroup={value} children={value.childrens}></Groups>
            </div>
          ))}
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
