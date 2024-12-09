import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

let formInitialDetails = {
  formName: "Nikhil's form",
  key: '',
  ques: []
}

const initialState = [];

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    createNewForm: (state, action) => {
      formInitialDetails.key = action.payload;
      state.push(...state, formInitialDetails);
    },
    getForm: (state) => {
      return state;
    },
    changeFormName: (state, action) => {
      const { key, newName } = action.payload;
      state.forEach(form => {
        if (form.key === key) {
          return form.formName = newName;
        }
      });
    },
    setQuestions: (state, action) => {
      const { que, key } = action.payload;
      state.forEach(form => {
        if (form.key === key) {
          return form.ques.push(que);
        }
      });
    },
    getQuestionsByForm: (state, action) => {
      const { key } = action.payload;
      state.forEach(form => {
        if (form.key === key) {
          return form.ques;
        }
      })
    },
    updateAllQues: (state, action) => {
      const { key, ques } = action.payload;
      state.forEach(form => {
        if (form.key === key) {
          form.ques = [];
          return form.ques = ques;
        }
      })
    },
    changeQuesType: (state, action) => {
      const { formKey, quesKey, text, img } = action.payload;
      state.forEach(form => {
        if (form.key === formKey) {
          form.ques.forEach(que => {
            if (que.index === quesKey) {
              que.img = img;
              que.text = text;
              que.index = uuidv4(),
                que.key = text.trim().toLowerCase()
            }
          })
        }
      });
    },
    changeQues: (state, action) => {
      const { formKey, quesIndex, newQue } = action.payload;
      state.forEach(form => {
        if (form.key === formKey) {
          form.ques.forEach(que => {
            if (que.index === quesIndex) {
              que.que = newQue;
            }
          })
        }
      })
    }
  },
})

export const { createNewForm, getForm, changeFormName, setQuestions, getQuestionsByForm, updateAllQues, changeQuesType, changeQues } = formSlice.actions
export default formSlice.reducer