import React, { useRef, useState } from "react";
import "../../style/Collapsible.css";

const Collapsible = (props) => {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="collapsible-button">
        <button onClick={handleToggle}>{props.label}</button>
      </div>
      <div
        className={open ? "content-show" : "content-parent"}
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content"> {props.children} </div>
      </div>
    </>
  );
};
export default Collapsible;
