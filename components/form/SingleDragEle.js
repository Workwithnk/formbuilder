import { questionTypeArr } from '@/constants/questionTypeArr';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

function SingleDragEle({ item, handleDragStart, index }) {
  const [selectQuesType, setSelectQueType] = useState({
    text: '',
    img: ''
  });
  const [showQueMenu, setShowQuesMenu] = useState(false);
  console.log("ITEM >>", item);

  useEffect(() => {
    setSelectQueType({ text: item.text, img: item.img })
  }, [item.text, item.img])

  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between items-center">
        <div style={{ display: "flex", alignItems: "center" }}>
          {item.text}
        </div>

        <div className=" flex">
          <button className='relative mr-2 flex' onClick={() => setShowQuesMenu(!showQueMenu)}>
            <Image width={20} height={20} className='w-5 h-auto' src={selectQuesType.img} alt={selectQuesType.text} />
            <IoIosArrowDown className={` w-5 h-auto ${showQueMenu ? 'rotate-180' : 'rotate-0'} `} />
            <div className={` ${showQueMenu ? 'h-[150px] opacity-100' : 'h-0 opacity-0'} -left-2 top-6 w-[38px] z-10 absolute bg-white border border-gray-300 rounded-2xl overflow-hidden`}>
              <div className='p-2 flex flex-col gap-4 bg-white'>
                {
                  questionTypeArr.filter(item => item.img !== selectQuesType.img).map((ques, i) => {
                    return <span onClick={() => setSelectQueType({ text: ques.text, img: ques.img })} key={i} value={ques.text} ><Image className='w-5 h-auto' src={ques.img} alt={ques.text} width={20} height={20} /></span>
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