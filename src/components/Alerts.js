import React from "react";

export default function Alerts(props) {
    const capitalize=(str)=>{
      let lower = str.toLowerCase();
       return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height: "60px"}}>
    { props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )}
    </div>
  );
}
