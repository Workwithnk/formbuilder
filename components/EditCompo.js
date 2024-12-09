import React from 'react'

function EditCompo({ showInp, handleShowInp, formName, handleForm, inp, setInp, percent, color }) {
  const baseQueText = 'Write a question';
  return (
    <div className='mr-16 lg:mr-11'>
      {!showInp && <span className={`${baseQueText === formName ? "text-[#959DA5]" : 'text-black'}  flex text-base cursor-pointer`} onClick={handleShowInp}>{formName}</span>}
      {showInp && <form onSubmit={handleForm}>
        <input className={`text-base outline-none bg-formBg border-b border-black w-[${percent}%]`} max={64} type='text' alt='form name' value={inp} onChange={e => setInp(e.target.value)} />
      </form>}
    </div>
  )
}

export default EditCompo