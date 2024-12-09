import React from 'react'
import LongAns from '../QuesTypes/LongAns';
import ShortAns from '../QuesTypes/ShortAns';
import SingleSelect from '../QuesTypes/SingleSelect';
import Url from '../QuesTypes/Url';
import Date from '../QuesTypes/Date';

function BuildQues({ selectQuesType, form }) {
  const quesType = selectQuesType.text.trim().toLowerCase();

  if (quesType === 'long answer') {
    return <LongAns selectQuesType={selectQuesType} />
  }

  if (quesType === "short answer") {
    return <ShortAns selectQuesType={selectQuesType} form={form} />
  }

  if (quesType === "single select") {
    return <SingleSelect selectQuesType={selectQuesType} />
  }

  if (quesType === "url") {
    return <Url selectQuesType={selectQuesType} />
  }

  if (quesType === "date") {
    return <Date selectQuesType={selectQuesType} />
  }

  return <h1>Not found</h1>

}

export default BuildQues