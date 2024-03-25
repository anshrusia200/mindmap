import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal";
import "./index.css";

const colors = [
  {
    bg: "#2A4494",
    color: "#ffffff",
  },
  {
    bg: "#82B3E8",
    color: "#000000",
  },
  {
    bg: "#E96343",
    color: "#000000",
  },
  {
    bg: "#E8919D",
    color: "#000000",
  },
  {
    bg: "#A684EB",
    color: "#000000",
  },
];

const treeData = [
  {
    id: "1",
    text: "Research",
    diamond: false,
    bg: colors[0].bg,
    color: colors[0].color,
    children: [
      {
        id: "6",
        text: "External",
        diamond: false,
        bg: colors[0].bg,
        color: colors[0].color,
        children: [
          {
            id: "7",
            text: "B2C",
            diamond: false,
            bg: colors[0].bg,
            color: colors[0].color,

            children: [
              {
                id: "4",
                text: "Online",
                diamond: false,
                bg: colors[0].bg,
                color: colors[0].color,
              },
              {
                id: "4",
                text: "Interview",
                diamond: false,
                bg: colors[0].bg,
                color: colors[0].color,
              },
              {
                id: "4",
                text: "Public Data",
                diamond: false,
                bg: colors[0].bg,
                color: colors[0].color,
              },
              {
                id: "4",
                text: "Health",
                diamond: false,
                bg: colors[0].bg,
                color: colors[0].color,
              },
            ],
          },
          {
            id: "4",
            text: "B2C",
            diamond: false,
            bg: colors[0].bg,
            color: colors[0].color,
          },
        ],
      },
      {
        id: "7",
        text: "Internal",
        diamond: false,
        bg: colors[0].bg,
        color: colors[0].color,
      },
    ],
  },
  {
    id: "2",
    text: "Planning",
    diamond: false,
    bg: colors[1].bg,
    color: colors[1].color,
    children: [
      {
        id: "6",
        text: "PRD",
        diamond: false,
        bg: colors[1].bg,
        color: colors[1].color,
      },
      {
        id: "7",
        text: "Specs",
        diamond: false,
        bg: colors[1].bg,
        color: colors[1].color,
      },
    ],
  },
  {
    id: "3",
    text: "Designing",
    diamond: false,
    bg: colors[2].bg,
    color: colors[2].color,
    children: [
      {
        id: "6",
        text: "Hardware",
        diamond: false,
        bg: colors[2].bg,
        color: colors[2].color,
      },
      {
        id: "7",
        text: "Software",
        diamond: false,
        bg: colors[2].bg,
        color: colors[2].color,
      },
    ],
  },
  {
    id: "4",
    text: "Manufacturing",
    diamond: false,
    bg: colors[3].bg,
    color: colors[3].color,
    children: [
      {
        id: "6",
        text: "Material",
        diamond: false,
        bg: colors[3].bg,
        color: colors[3].color,
      },
      {
        id: "7",
        text: "Production",
        diamond: false,
        bg: colors[3].bg,
        color: colors[3].color,
      },
    ],
  },
  {
    id: "5",
    text: "Sales/Marketing",
    diamond: false,
    bg: colors[4].bg,
    color: colors[4].color,
    children: [
      {
        id: "6",
        text: "Online",
        diamond: false,
        bg: colors[4].bg,
        color: colors[4].color,
      },
      {
        id: "7",
        text: "Dealership",
        diamond: false,
        bg: colors[4].bg,
        color: colors[4].color,
      },
    ],
  },
];

console.log(treeData);

console.log();

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
