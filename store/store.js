import { configureStore } from '@reduxjs/toolkit'
import formReducer from './reducer/formReducer'
import queReducer from './reducer/queReducer'

export const store = configureStore({
  reducer: { formReducer, queReducer },
})