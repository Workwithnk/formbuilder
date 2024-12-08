'use client';
import { useEffect, useState } from "react";
import AddQuestion from "@/components/form/AddQuestion";
import FormHeader from "@/components/form/FormHeader"
import DragDropList from "@/components/form/DragDropList";
import FormFooter from "@/components/form/FormFooter";
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation'


function BuildForm() {
  const formData = useSelector(state => state.formReducer)
  console.log("FORM DATA >>>", formData);
  const searchParams = useSearchParams();
  const formKey = searchParams.get('formKey')
  const thisForm = formData.length > 0 && formData.filter(data => data.key === formKey)[0]
  return (
    <div className={`max-w-7xl mx-auto`}>
      <FormHeader form={thisForm} />
      {formData.length > 0 && <DragDropList />}
      <AddQuestion form={thisForm} />
      <FormFooter />
    </div>
  )
}

export default BuildForm