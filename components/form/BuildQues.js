import React from 'react'
import LongAns from '../QuesTypes/LongAns';
import ShortAns from '../QuesTypes/ShortAns';
import SingleSelect from '../QuesTypes/SingleSelect';
import Url from '../QuesTypes/Url';
import Date from '../QuesTypes/Date';

function BuildQues({ selectQuesType }) {
  const quesType = selectQuesType.text.trim().toLowerCase();

  if (quesType === 'long answer') {
    return <LongAns />
  }

  if (quesType === "short answer") {
    return <ShortAns />
  }

  if (quesType === "single select") {
    return <SingleSelect />
  }

  if (quesType === "url") {
    return <Url />
  }

  if (quesType === "date") {
    return <Date />
  }

  return <h1>Not found</h1>

}

export default BuildQues