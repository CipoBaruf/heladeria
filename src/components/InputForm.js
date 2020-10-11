import React from "react";

export default function InputForm(props) {
  const { label, id, margin } = props;
  return (
    <div>
      <div className={`mb-1 ${margin}`}>
        <label className="label-form">{label}</label>
        <input className="input-form" id={id} type="text" />
      </div>
    </div>
  );
}
