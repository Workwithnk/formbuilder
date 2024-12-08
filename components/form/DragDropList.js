import Image from "next/image";
import React, { useEffect, useState } from "react";
import SingleDragEle from "./SingleDragEle";

const DragDropList = ({ selectedQueType, setSelectedQueType }) => {

  const [items, setItems] = useState([]);

  const handleDragStart = (e, position) => {
    e.dataTransfer.setData("draggedIndex", position);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, position) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"), 10);
    if (draggedIndex === position) return;

    const reorderedItems = Array.from(items);
    const [draggedItem] = reorderedItems.splice(draggedIndex, 1);
    reorderedItems.splice(position, 0, draggedItem);

    const updatedItems = reorderedItems.map((item, i) => ({
      ...item,
      index: i,
    }));
    setItems(updatedItems);
  };

  useEffect(() => {
    setItems([...selectedQueType]);
  }, [selectedQueType.length])


  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className=" p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8]"
        >
          <SingleDragEle handleDragStart={handleDragStart} item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default DragDropList;
