import { questionTypeArr } from '@/constants/questionTypeArr'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [...questionTypeArr];

export const queSlice = createSlice({
  name: 'queReducer',
  initialState,
  reducers: {
    getQue: (state) => {
      return state;
    },
    updateIndex: (state, action) => {
      const { key, newIndex } = action.payload;
      state.forEach(item => {
        if (item.key === key) {
          item.index === newIndex
        }
      })
    }
  },
});

export const { getQue, updateIndex } = queSlice.actions
export default queSlice.reducer