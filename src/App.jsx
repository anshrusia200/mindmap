import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal";
import "./index.css";
import { treeData } from "../data";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="start"></div>
      <div className="tree">{treeRendering(treeData)}</div>
    </div>
  );
}
const treeRendering = (treeData) => {
  return (
    <>
      <ul>
        {treeData.length > 1 && <div className="joiner"></div>}
        {treeData.map((item) => (
          <li className={item.text + item.id}>
            {/* <div className="joiner"></div> */}
            <div
              className="item"
              style={{ backgroundColor: `${item.bg}`, color: `${item.color}` }}
            >
              <div className="tooltip">
                <Modal />
              </div>
              {item.text}
            </div>

            {item.children && item.children.length
              ? treeRendering(item.children)
              : ""}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
