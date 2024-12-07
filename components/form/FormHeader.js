import { ctaStateClasses } from '@/constants/tailwindConst';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

function FormHeader() {
  const initialFormName = "Untitled form"
  const [inp, setInp] = useState(initialFormName)
  const [formName, setFormName] = useState(initialFormName);
  const [showInp, setShowInp] = useState(false);
  function handleShowInp() {
    setShowInp(true)
  }

  function handleForm(e) {
    e.preventDefault();
    setFormName(inp);
    setShowInp(false);
  }

  return (
    <div className="flex justify-between items-center px-5 py-3 border-b border-[#E1E4E8]">
      <div>
        {!showInp && <span className=' text-base cursor-pointer' onClick={handleShowInp}>{formName}</span>}
        {showInp && <form onSubmit={handleForm}> <input className=' text-base outline-none bg-formBg border-b border-black max-w-[70%]' max={64} type='text' alt='form name' value={inp} onChange={e => setInp(e.target.value)} /> </form>}
      </div>
      <Link href={"/prev-form"} className={`flex text-base ${ctaStateClasses}`}> Preview Form <MdArrowOutward className=' w-4 h-auto' /></Link>
    </div>
  )
}

export default FormHeader