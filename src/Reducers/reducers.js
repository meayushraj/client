import { combineReducers } from "redux"
import isEmpty from "../validation/is-empty"
import _ from "lodash"
import { reducer as FormReducer } from "redux-form"
import { ReducerCourses } from "./courseReducers"
import { ReducersSection } from "./courseReducers"

const initialState = {
  isAuthenticated: false,
  user: {},
  resetPassword: false
}

const ReducerAuthenticate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log(111)
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }

    default:
      return state
  }
}

const UploadReduer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return {
        ...state,
        [action.payload]: action.payload
      }
    default:
      return state
  }
}
const ForgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOT":
      return {
        ...state,
        resetPassword: true
      }
    default:
      return state
  }
}

export default combineReducers({
  Credentials: ReducerAuthenticate,
  course: ReducerCourses,
  Sections: ReducersSection,
  form: FormReducer,
  UploadReduer: UploadReduer,
  forgetPassword: ForgetPasswordReducer
})
