import { changeFormStatus } from '@/store/reducer/formReducer';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { IoDocumentTextOutline, IoCheckmarkSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';


function FormFooter() {

  const formData = useSelector(state => state.formReducer);
  const searchParams = useSearchParams();
  const formKey = searchParams.get("formKey");
  const thisForm = formData.find(data => data.key === formKey);
  const baseQueText = 'Write a question';
  const router = useRouter();
  const dispatch = useDispatch();

  function changeFontColor(status) {
    const issueId = []
    thisForm.ques.length > 0 && thisForm.ques.forEach(que => {
      if (que.que === baseQueText) {
        issueId.push(que.index)
      }
    })

    issueId.length > 0 && issueId.forEach((id) => {
      const ele = document.getElementById(`${id}`);
      if (ele) {
        ele.style.color = 'red';
      } else {
        ele.style.color = 'black';
      }
    })
    if (issueId.length === 0) {
      dispatch(changeFormStatus({ formKey: thisForm.key, status: status }));
      router.push(`/`)
    }
  }

  function handleSave() {
    changeFontColor('save');
  }

  function handlePublish() {
    changeFontColor('publish');
  }

  return (
    <>
      {thisForm.ques && thisForm.ques.length > 0 &&
        <div className="flex bg-[#F6F8FAE5] justify-between items-center px-5 py-3 border-t border-[#E1E4E8]">
          <button onClick={handleSave} className=' flex items-center hover:bg-black hover:text-white border border-gray-400 px-2 py-1 rounded-lg'> <IoDocumentTextOutline className='w-4 mr-1' /> Save as Draft</button>
          <button onClick={handlePublish} className='flex items-center px-2 bg-[#00AA45] text-white py-1 rounded-lg'> <IoCheckmarkSharp className='w-4 mr-1' />Publish Form</button>
        </div>
      }
    </>
  )
}

export default FormFooter