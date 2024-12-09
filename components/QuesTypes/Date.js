import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import EditCompo from '../EditCompo';
import { changeQues } from '@/store/reducer/formReducer';

function Date({ selectQuesType, form }) {
  const thisQues = form.ques.filter(fq => fq.index === selectQuesType.index)[0];
  const [inp, setInp] = useState(thisQues.que)
  const [formName, setFormName] = useState(thisQues.que);
  const [showInp, setShowInp] = useState(false);
  const dispatch = useDispatch()

  function handleShowInp() {
    setShowInp(true)
  }

  function handleForm(e) {
    e.preventDefault();
    setFormName(inp);
    setShowInp(false);
    dispatch(changeQues({ formKey: form.key, quesIndex: selectQuesType.index, newQue: inp }))
  }

  return (
    <div className=' w-full '>
      <EditCompo id={selectQuesType.index} showInp={showInp} handleShowInp={handleShowInp} formName={formName} handleForm={handleForm} inp={inp} setInp={setInp} percent={80} color={'#959DA5'} />
      <input className='w-full p-2 border border-[#E1E4E8] rounded-lg mt-2 bg-[#F6F8FA]' type='date' disabled />
    </div>
  )
}

export default Date