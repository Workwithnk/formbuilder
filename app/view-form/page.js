'use client';
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import FormPreview from "@/components/FormPreview";


function ViewFormInner() {
  const formData = useSelector(state => state.formReducer)
  const searchParams = useSearchParams();
  const formKey = searchParams.get('formKey')
  const thisForm = formData.length > 0 && formData.filter(data => data.key === formKey)[0]
  return (
    <div className={`max-w-7xl mx-auto`}>
      <Link href={'/'} className=" px-6 flex text-base items-center border-b border-gray-200 py-3" > <FaArrowLeft className="mr-2" /> home </Link>
      <div className=" flex flex-col">
        <div className="px-6 flex text-base items-center border-b border-gray-200 py-3"> <h2>{thisForm.formName}</h2> </div>
        <div className=" py-3 flex flex-col gap-4">
          {
            thisForm.ques && thisForm.ques.length > 0 && thisForm.ques.map((item, i) => {
              return (
                <FormPreview key={i} item={item} form={thisForm} />
              )
            })
          }
        </div>
        {thisForm.ques && thisForm.ques.length > 0 && <button className=" w-fit ml-auto mr-5 bg-[#00AA45] rounded py-[6px] px-4 text-white mb-5" > submit </button>}
      </div>
    </div>)
}

export function ViewForm() {
  return (
    <Suspense>
      <ViewFormInner />
    </Suspense>
  )
}
export default ViewForm

