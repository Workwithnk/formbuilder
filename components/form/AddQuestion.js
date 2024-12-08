
import Image from 'next/image';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { v4 as uuidv4 } from "uuid";
import { questionTypeArr } from '@/constants/questionTypeArr';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '@/store/reducer/formReducer';
import { updateIndex } from '@/store/reducer/queReducer';


function AddQuestion({ form, selectedQueType, setSelectedQueType }) {
  const questions = useSelector(state => state.queReducer);
  const formReducer = useSelector(state => state.formReducer);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);
  const [inpType, setInpType] = useState('');
  const [inpTypeArr, setInpTypeArr] = useState(questions)
  function handleShowMenu() {
    setShowMenu(!showMenu);
    setRotateIcon(!rotateIcon);
  }

  function handleQuestionSelection(ques) {
    setShowMenu(!showMenu);
    setRotateIcon(!rotateIcon);
    dispatch(updateIndex({ key: ques.key, newIndex: uuidv4() }))
    dispatch(setQuestions({ key: form.key, que: ques }))
  }

  function handleInput(e) {
    const inpVal = e.target.value;
    setInpType(inpVal);
    const fltQueryArr = questionTypeArr.filter(item => item.text.toLowerCase().includes(inpVal.toLowerCase()));
    inpVal.length > 0 ? setInpTypeArr(fltQueryArr) : setInpTypeArr(questions)
  }

  return (
    <div className=' w-max relative mx-auto'>
      <button onClick={handleShowMenu} className={` flex items-center shadow-sm my-8 w-max mx-auto border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`}><FiPlus className={` ${rotateIcon ? 'rotate-45' : 'rotate-0'} transition-all w-4 mr-1 h-auto`} /> Add Question</button>
      <div className={` ${showMenu ? 'h-[250px] opacity-100' : 'h-0 opacity-0'} absolute left-[-30px] top-[50px] bg-white transition-all shadow-sm rounded-[22px] overflow-hidden`}>
        <div className={`flex flex-col  h-[inherit] max-w-[300px] border  rounded-[22px] border-gray-300 px-1 py-1`} >
          <input className=' bg-[#FAFBFC] px-4 rounded-full outline-none py-2' text={inpType} onChange={(e) => handleInput(e)} placeholder='Input types' />
          <ul className=' flex flex-col'>
            {
              inpTypeArr.map(ques => {
                return (<li onClick={() => handleQuestionSelection(ques)} key={ques.index} className='flex p-2 cursor-pointer items-center rounded-[22px] hover:bg-[#FAFBFC]'>
                  <Image src={ques.img} width={20} height={20} className=' max-w-4 h-auto object-contain mr-2' alt='Short answer' />
                  <span>{ques.text}</span>
                </li>)
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddQuestion