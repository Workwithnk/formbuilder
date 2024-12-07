'use client';
import AddQuestion from "@/components/form/AddQuestion";
import FormHeader from "@/components/form/FormHeader"
import { maxWidthClass } from "@/constants/tailwindConst";


function BuildForm() {
  return (
    <div className={maxWidthClass}>
      <FormHeader />
      <AddQuestion />
    </div>
  )
}

export default BuildForm