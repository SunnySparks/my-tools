import React from "react";

const CheckBox = (props) => {
  const {
    onChange,
    data: { id, taskInfo, done },
  } = props;
  return (
    <div id="cbCont">
      <div id="cbInner">
        <input
          className="cbText"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todoTxt">{taskInfo}</div>
      </div>
    </div>
  );
};

export default CheckBox;
