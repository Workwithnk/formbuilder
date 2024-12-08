'use client';
import { useEffect, useState } from "react";
import AddQuestion from "@/components/form/AddQuestion";
import FormHeader from "@/components/form/FormHeader"
import DragDropList from "@/components/form/DragDropList";
import FormFooter from "@/components/form/FormFooter";


function BuildForm() {
  const [selectedQueType, setSelectedQueType] = useState([]);
  console.log("Main", selectedQueType);

  useEffect(() => { }, [selectedQueType.length])

  return (
    <div className={`max-w-7xl mx-auto`}>
      <FormHeader />
      {selectedQueType.length > 0 && <DragDropList selectedQueType={selectedQueType} setSelectedQueType={setSelectedQueType} />}
      <AddQuestion selectedQueType={selectedQueType} setSelectedQueType={setSelectedQueType} />
      <FormFooter />
    </div>
  )
}

export default BuildForm