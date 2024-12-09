import { addNewOption, changeOptionName } from '@/store/reducer/formReducer';
import React, { useEffect, useState } from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

function RadioCompo({ option, i, optionArr, form, selectQuesType }) {
  const [optionVal, setOptionVal] = useState('');
  const dispatch = useDispatch();
  function handleAddOption() {
    dispatch(addNewOption({ formKey: form.key, quesIndex: selectQuesType.index }))
  }

  function SaveOption() {
    dispatch(changeOptionName({ formKey: form.key, quesIndex: selectQuesType.index, optionId: option.optionId, optionName: optionVal }))
  }

  useEffect(() => {
    option.optionName.length > 0 ? setOptionVal(option.optionName) : setOptionVal('')
  }, [])

  return (
    <div className='flex'>
      <div className=' flex items-center w-full '>
        <FaRegCircle className=' text-xl mr-2' />
        <input value={optionVal} onChange={(e) => setOptionVal(e.target.value)} className=' outline-none px-2 w-full border rounded-lg py-1 text-base border-[#E1E4E8]' type='text' />
      </div>
      {optionArr.length - 1 === i && <button onClick={SaveOption} className='outline-none ml-4 bg-green-300 text-sm rounded px-2'> save</button>}
      {optionArr.length - 1 === i && <button className='outline-none ml-4'> <FaPlus onClick={handleAddOption} className=' text-xl h-auto' /></button>}
    </div>
  )
}

export default RadioCompo