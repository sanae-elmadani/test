import "./DropDown.css";
import Dropdown from "./DropDownJSX";
import { useState } from "react";
export default function DropDown() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />

      {/* {selected} */}
    </div>
  );
}
