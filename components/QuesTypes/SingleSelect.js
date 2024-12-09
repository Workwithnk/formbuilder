import { addNewOption, changeQues } from '@/store/reducer/formReducer';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import EditCompo from '../EditCompo';
import { FaPlus } from "react-icons/fa6";
import RadioCompo from '../RadioCompo';

function SingleSelect({ selectQuesType, form }) {

  const thisQues = form.ques.filter(fq => fq.index === selectQuesType.index)[0];
  const [inp, setInp] = useState(thisQues.que)
  const [formName, setFormName] = useState(thisQues.que);
  const [showInp, setShowInp] = useState(false);
  const [optionArr, setOptionArr] = useState([...thisQues.options]);

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


  useEffect(() => {
    setOptionArr([...thisQues.options])
  }, [thisQues.options.length])

  console.log(form)
  return (
    <div className=' w-full '>
      <EditCompo showInp={showInp} handleShowInp={handleShowInp} formName={formName} handleForm={handleForm} inp={inp} setInp={setInp} percent={80} color={'#959DA5'} />
      <div className=' flex flex-col gap-2 mt-2'>
        {
          optionArr.length > 0 && optionArr.map((option, i) => {
            return <RadioCompo form={form} selectQuesType={selectQuesType} key={i} optionArr={optionArr} i={i} option={option} />
          })
        }
      </div>
    </div>
  )
}

export default SingleSelect