import { changeFormName } from '@/store/reducer/formReducer';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { useDispatch } from 'react-redux';
import EditCompo from '../EditCompo';

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
    <div className="flex justify-between items-center px-6 py-3 border-b border-[#E1E4E8]">
      <EditCompo showInp={showInp} handleShowInp={handleShowInp} formName={formName} handleForm={handleForm} inp={inp} setInp={setInp} percent={50} />
      <Link href={"/prev-form"} className={`flex text-base border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`}> Preview Form <MdArrowOutward className=' w-4 h-auto' /></Link>
    </div>
  )
}

export default FormHeader