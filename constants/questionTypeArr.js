import { v4 as uuidv4 } from "uuid";
export const questionTypeArr = [
  {
    index: uuidv4(),
    img: '/shortans.png',
    text: 'Short answer',
    key: 'shortanswer',
  },
  {
    index: uuidv4(),
    img: '/longans.png',
    text: 'Long Answer',
    key: 'longanswer',
  },
  {
    index: uuidv4(),
    img: '/singleselect.png',
    text: 'Single select',
    key: 'singleselect',
  },
  {
    index: uuidv4(),
    img: '/url.png',
    text: 'URL',
    key: 'url',
  },
  {
    index: uuidv4(),
    img: '/date.png',
    text: 'Date'
  },
]