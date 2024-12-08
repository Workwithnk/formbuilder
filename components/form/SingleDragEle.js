import { questionTypeArr } from '@/constants/questionTypeArr';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import BuildQues from './BuildQues';

function SingleDragEle({ selectedQueType, setSelectedQueType, item, handleDragStart, index }) {
  const [selectQuesType, setSelectQueType] = useState({
    text: '',
    img: '',
    key: ''
  });
  const [showQueMenu, setShowQuesMenu] = useState(false);

  useEffect(() => {
    setSelectQueType({ text: item.text, img: item.img, key: item.key })
  }, [item.text, item.img]);

  function handleTypeClick(ques) {
    setSelectQueType({ text: ques.text, img: ques.img });
    setSelectedQueType(prevItems => {
      const newItems = [...prevItems];
      const index = newItems.findIndex(item => item.key === selectQuesType.key);
      if (index !== -1) {
        newItems[index].img = ques.img;
        newItems[index].text = ques.text;
      }
      return newItems;
    });
  }

  console.log("Context Value >>", selectedQueType)

  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between items-center">
        <BuildQues selectQuesType={selectQuesType} />

        <div className=" flex">
          <button className='relative mr-2 flex' onClick={() => setShowQuesMenu(!showQueMenu)}>
            <Image width={20} height={20} className='w-5 h-auto' src={selectQuesType.img} alt={selectQuesType.text} />
            <IoIosArrowDown className={` w-5 h-auto ${showQueMenu ? 'rotate-180' : 'rotate-0'} `} />
            <div className={` ${showQueMenu ? 'h-[150px] opacity-100' : 'h-0 opacity-0'} transition-all -left-2 top-6 w-[38px] z-10 absolute bg-white border border-gray-300 rounded-2xl overflow-hidden`}>
              <div className='p-2 flex flex-col gap-4 bg-white'>
                {
                  questionTypeArr.filter(item => item.img !== selectQuesType.img).map((ques, i) => {
                    return <span onClick={() => handleTypeClick(ques)} key={i} value={ques.text} ><Image title={ques.text} className='w-5 h-auto' src={ques.img} alt={ques.text} width={20} height={20} /></span>
                  })
                }
              </div>
            </div>
          </button>
          <button
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            className=""
          >
            <Image width={15} height={15} className=" w-4 h-auto " src={'/drag.png'} alt="drag" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleDragEle