import React, { useState } from "react";
import { Col, Collapse, Checkbox, Radio } from "antd";
const { Panel } = Collapse;
function RadioBox(props) {
  const [Value, setValue] = useState(0);
  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => (
      <Radio key={value._id} value={value._id}>
        {value.name}
      </Radio>
    ));

  const handlerChange = (e) => {
    setValue(e.target.value);
    props.handleFilters(e.target.value);
  };
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Price" key="1">
          <Radio.Group onChange={handlerChange} value={Value}>
            {renderRadioBox()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
