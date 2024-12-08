import React from 'react';
import { IoDocumentTextOutline, IoCheckmarkSharp } from "react-icons/io5";


function FormFooter() {
  return (
    <div className="flex bg-[#F6F8FAE5] justify-between items-center px-5 py-3 border-t border-[#E1E4E8]">
      <button className=' flex items-center hover:bg-black hover:text-white border border-gray-400 px-2 py-1 rounded-lg'> <IoDocumentTextOutline className='w-4 mr-1' /> Save as Draft</button>
      <button className='flex items-center px-2 bg-[#00AA45] text-white py-1 rounded-lg'> <IoCheckmarkSharp className='w-4 mr-1' />Publish Form</button>
    </div>
  )
}

export default FormFooter