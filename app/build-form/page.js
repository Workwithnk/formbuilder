'use client';
import AddQuestion from "@/components/form/AddQuestion";
import FormHeader from "@/components/form/FormHeader"
import DragDropList from "@/components/form/DragDropList";
import FormFooter from "@/components/form/FormFooter";
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";


function BuildFormInner() {
  const formData = useSelector(state => state.formReducer)
  const searchParams = useSearchParams();
  const formKey = searchParams.get('formKey')
  const thisForm = formData.length > 0 && formData.filter(data => data.key === formKey)[0]
  return (
    <div className={`max-w-7xl mx-auto`}>
      <Link href={'/'} className=" px-6 flex text-base items-center border-b border-gray-200 py-3" > <FaArrowLeft className="mr-2" /> home </Link>
      <FormHeader form={thisForm} />
      {formData.length > 0 && <DragDropList />}
      <AddQuestion form={thisForm} />
      <FormFooter />
    </div>)
}

export function BuildForm() {
  return (
    <Suspense>
      <BuildFormInner />
    </Suspense>
  )
}
export default BuildForm

