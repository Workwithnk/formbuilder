import { v4 as uuidv4 } from "uuid";
export const questionTypeArr = [
  {
    index: uuidv4(),
    img: '/shortans.png',
    text: 'Short answer',
    key: 'shortanswer',
    que: 'Write a question',
  },
  {
    index: uuidv4(),
    img: '/longans.png',
    text: 'Long Answer',
    key: 'longanswer',
    que: 'Write a question',
  },
  {
    index: uuidv4(),
    img: '/singleselect.png',
    text: 'Single select',
    key: 'singleselect',
    que: 'Write a question',
    options: [{
      optionId: uuidv4(),
      optionName: '',
    }]
  },
  {
    index: uuidv4(),
    img: '/url.png',
    text: 'URL',
    key: 'url',
    que: 'Write a question',
  },
  {
    index: uuidv4(),
    img: '/date.png',
    text: 'Date',
    que: 'Write a question',
  },
]