import React, { useState } from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;
function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const searchHanlder = (e) => {
    setSearchTerm(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        onChange={searchHanlder}
        style={{ width: 200 }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;
