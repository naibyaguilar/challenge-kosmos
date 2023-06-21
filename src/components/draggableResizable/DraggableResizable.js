import React, { useRef } from "react";
import Moveable from "react-moveable";
import "./DraggableResizable.css";
const DraggableResizable = ({ id, url, title, onDelete }) => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  const handleDelete = () => {};

  return (
    <div className="parent">
      <button onClick={onDelete}>Delete</button>
      <div
        className="target"
        ref={targetRef}
        style={{
          width: "200px",
          height: "150px",
          transform: "scale(1.5, 1)",
        }}
      >
        <img
          key={id}
          src={url}
          alt={title}
          style={{
            width: "200px",
            height: "150px",
          }}
          onDoubleClick={handleDelete}
        />
      </div>
      <Moveable
        ref={moveableRef}
        target={targetRef}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        scalable={true}
        keepRatio={false}
        throttleScale={0}
        snappable={true}
        bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: "css" }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
      />
    </div>
  );
};

export default DraggableResizable;
