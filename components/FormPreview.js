import React, { useState } from 'react';

function FormPreview({ item, form }) {

  const [radioState, setRadioState] = useState('');
  const [singleSelect, setSingleSelect] = useState('');
  const [longSelect, setLongSelect] = useState('');
  const [url, setURL] = useState('');
  const [date, setDate] = useState('');

  if (item.key === 'singleselect') {
    return (
      <div className='p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white ' >
        <label className='text-[14px] mb-3 font-bold'>{item.que}</label>
        <div>
          {
            item.options.length > 0 && item.options.map((item, i) => {
              return <div className='flex text-[14px] mb-1' key={i}>
                <input type='radio' onChange={e => setRadioState(e.target.value)} name="radioCTA" checked={radioState === item.optionName} value={item.optionName} />
                <span className='ml-1'>{item.optionName}</span>
              </div>
            })
          }
        </div>
      </div>
    )
  }

  if (item.key === 'shortanswer') {
    return (
      <div className='p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white' >
        <label className='text-[14px] mb-3 font-bold'>{item.que}</label>
        <input value={singleSelect} onChange={e => setSingleSelect(e.target.value)} className='w-full p-2 border border-[#E1E4E8] rounded-lg mt-2 ' type='text' />
      </div>)
  }

  if (item.key === 'longanswer') {
    return (
      <div className='p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white' >
        <label className='text-[14px] mb-3 font-bold'>{item.que}</label>
        <textarea rows={3} value={longSelect} onChange={e => setLongSelect(e.target.value)} className='w-full p-2 border border-[#E1E4E8] rounded-lg mt-2 ' type='text' />
      </div>)
  }

  if (item.key === 'url') {
    return (
      <div className='p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white' >
        <label className='text-[14px] mb-3 font-bold'>{item.que}</label>
        <input value={url} onChange={e => setURL(e.target.value)} className='w-full p-2 border border-[#E1E4E8] rounded-lg mt-2' type='text' />
      </div>)
  }

  if (item.key === 'date') {
    return (
      <div className=' p-4 my-2 border mx-5 rounded-2xl border-[#E1E4E8] bg-white' >
        <label className='text-[14px] mb-3 font-bold'>{item.que}</label>
        <input value={date} onChange={e => setDate(e.target.value)} className='w-full p-2 border border-[#E1E4E8] rounded-lg mt-2' type='date' />
      </div>)
  }

  return <h1>None</h1>
}

export default FormPreview