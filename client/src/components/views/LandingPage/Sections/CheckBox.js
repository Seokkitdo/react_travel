import React, { useState } from "react";
import { Col, Collapse, Checkbox } from "antd";
const { Panel } = Collapse;
function CheckBox(props) {
  // props.list가 있을 경우 반복문 실행

  const [Checked, setChecked] = useState([]);

  const handlerToggle = (value) => {
    // 누른 것의 Index를 구하고
    const currentIndex = Checked.indexOf(value);

    // 전체 Checked된 State에서 현재 누른 Checked가 이미 있다면

    const newChecked = [...Checked];

    // 없다면 State에 넣어준다.

    if (currentIndex === -1) {
      newChecked.push(value);
      // 빼주고
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };
  const renderCheckboxList = (e) =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handlerToggle(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </React.Fragment>
    ));
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Continents" key="1">
          {renderCheckboxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
