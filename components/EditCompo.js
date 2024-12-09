import React from 'react'

function EditCompo({ id, showInp, handleShowInp, formName, handleForm, inp, setInp, percent, color }) {
  const baseQueText = 'Write a question';
  return (
    <div className='mr-16 lg:mr-11'>
      {!showInp && <span id={id} className={`${baseQueText === formName ? "text-[#959DA5]" : 'text-black'}  flex text-base cursor-pointer`} onClick={handleShowInp}>{formName}</span>}
      {showInp && <form onSubmit={handleForm}>
        <input className={`text-base outline-none bg-formBg border-b bg-[#FAFBFC] border-black w-[${percent}%]`} max={64} type='text' alt='form name' value={inp} onChange={e => setInp(e.target.value)} />
        <button className='outline-none ml-4 bg-green-300 text-sm rounded px-2' type='submit'>save</button>
      </form>}
    </div>
  )
}

export default EditCompo