import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.hc} type="text" value={props.it} />
      <button onClick={props.ai}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
