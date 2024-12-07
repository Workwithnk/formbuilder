import { ctaStateClasses } from '@/constants/tailwindConst'
import Image from 'next/image';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const questionTypeArr = [
  {
    index: 0,
    img: '/shortans.png',
    text: 'Short answer',
    key: 'shortanswer',
  },
  {
    index: 1,
    img: '/longans.png',
    text: 'Long Answer',
    key: 'longanswer',
  },
  {
    index: 2,
    img: '/singleselect.png',
    text: 'Single select',
    key: 'singleselect',
  },
  {
    index: 3,
    img: '/url.png',
    text: 'URL',
    key: 'url',
  },
  {
    index: 4,
    img: '/number.png',
    text: 'number'
  },
]


function AddQuestion() {
  const [showMenu, setShowMenu] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);
  const [inpType, setInpType] = useState('');

  function handleShowMenu() {
    setShowMenu(!showMenu);
    setRotateIcon(!rotateIcon);
  }

  function handleQuestionSelection(ques) {
    console.log("Selected Ques:", ques);
    setShowMenu(!showMenu);
    setRotateIcon(!rotateIcon)
  }

  return (
    <div className=' w-max relative mx-auto'>
      <button onClick={handleShowMenu} className={` flex items-center shadow-sm mt-8 w-max mx-auto ${ctaStateClasses}`}><FiPlus className={` ${rotateIcon ? 'rotate-45' : 'rotate-0'} transition-all w-4 mr-1 h-auto`} /> Add Question</button>
      <div className={` ${showMenu ? 'h-[250px] opacity-100' : 'h-0 opacity-0'} absolute left-[-30px] top-[50px] bg-white transition-all shadow-sm rounded-[22px] overflow-hidden`}>
        <div className={`flex flex-col  h-[inherit] max-w-[300px] border  rounded-[22px] border-gray-300 px-1 py-1`} >
          <input className=' bg-[#FAFBFC] px-4 rounded-full outline-none py-2' text={inpType} onChange={(e) => setInpType(e.target.value)} placeholder='Input types' />
          <ul className=' flex flex-col'>
            {
              questionTypeArr.map(ques => {
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