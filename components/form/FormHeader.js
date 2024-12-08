import { changeFormName } from '@/store/reducer/formReducer';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { useDispatch } from 'react-redux';

function FormHeader({ form }) {
  const initialFormName = form.formName
  const [inp, setInp] = useState(initialFormName)
  const [formName, setFormName] = useState(initialFormName);
  const [showInp, setShowInp] = useState(false);
  const dispatch = useDispatch()

  function handleShowInp() {
    setShowInp(true)
  }

  function handleForm(e) {
    e.preventDefault();
    setFormName(inp);
    setShowInp(false);
    dispatch(changeFormName({ key: form.key, newName: inp }))
  }

  return (
    <div className="flex justify-between items-center px-5 py-3 border-b border-[#E1E4E8]">
      <div className=' w-1/2'>
        {!showInp && <span className=' text-base cursor-pointer' onClick={handleShowInp}>{formName}</span>}
        {showInp && <form onSubmit={handleForm}> <input className=' text-base outline-none bg-formBg border-b border-black w-[40%]' max={64} type='text' alt='form name' value={inp} onChange={e => setInp(e.target.value)} /> </form>}
      </div>
      <Link href={"/prev-form"} className={`flex text-base border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`}> Preview Form <MdArrowOutward className=' w-4 h-auto' /></Link>
    </div>
  )
}

export default FormHeader