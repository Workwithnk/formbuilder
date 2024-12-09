import React from "react";
import SingleDragEle from "./SingleDragEle";
import { useDispatch, useSelector } from "react-redux";
import { updateAllQues } from "@/store/reducer/formReducer";
import { useSearchParams } from "next/navigation";

const DragDropList = () => {
  const formData = useSelector(state => state.formReducer);
  const searchParams = useSearchParams();
  const formKey = searchParams.get("formKey");
  const dispatch = useDispatch();

  const thisForm = formData.find(data => data.key === formKey);

  const handleDragStart = (e, position) => {
    e.dataTransfer.setData("draggedIndex", position);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, position) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"), 10);
    if (draggedIndex === position) return;
    const reorderedItems = [...thisForm.ques];
    const [draggedItem] = reorderedItems.splice(draggedIndex, 1);
    reorderedItems.splice(position, 0, draggedItem);
    const updatedItems = reorderedItems.map((item, i) => ({
      ...item,
      index: i,
    }));
    dispatch(updateAllQues({ key: thisForm.key, ques: updatedItems }));
  };

  if (!thisForm) return <div>Loading...</div>;

  return (
    <div>
      {thisForm.ques.map((item, index) => (
        <div
          key={item.index}
          onDragOver={handleDragOver}
          onDrop={e => handleDrop(e, index)}
          className="p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white hover:bg-[#FAFBFC]"
        >
          <SingleDragEle
            form={thisForm}
            handleDragStart={handleDragStart}
            item={item}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default DragDropList;
