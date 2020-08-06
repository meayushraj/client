import { combineReducers } from "redux";
import isEmpty from "../validation/is-empty";
import _ from "lodash";
import { reducer as FormReducer } from "redux-form";
import { ReducerCourses, ReducerUserCourses } from "./courseReducers";
import { ReducersSection } from "./courseReducers";

const initialState = {
  isAuthenticated: false,
  user: {},
  resetPassword: false,
};

const ReducerAuthenticate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log(111);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
};

const UploadReduer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return {
        ...state,
        [action.payload]: action.payload,
      };
    default:
      return state;
  }
};
const ForgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOT":
      return {
        ...state,
        resetPassword: true,
      };
    default:
      return state;
  }
};

const ImageReducer = (state = {}, action) => {
  console.log("inside reducer");
  if (action.type === "IMAGE") {
    return action.payload;
  } else {
    return state;
  }
};
const VideoReducer = (state = {}, action) => {
  console.log("Inside Video reducer");
  if (action.type === "VIDEO") {
    return action.payload;
  } else {
    return state;
  }
};
const FetchInsCourseReducer = (state = {}, action) => {
  if (action.type === "FETCH_INS_COURSES") {
    return { ...state, instructorcourse: action.payload };
  } else {
    return state;
  }
};
const FetchPendingReducer = (state = {}, action) => {
  if (action.type === "FETCH_PENDING") {
    return { ...state, pendingcourses: action.payload };
  } else {
    return state;
  }
};
const FetchUsersReducer = (state = {}, action) => {
  if (action.type === "FETCH_USERS") {
    return { ...state, users: action.payload };
  } else {
    return state;
  }
};
const FetchAUserReducer = (state = {}, action) => {
  if (action.type === "USER_DETAILS") {
    return { ...state, user: action.payload };
  } else {
    return state;
  }
};
export default combineReducers({
  Credentials: ReducerAuthenticate,
  course: ReducerCourses,
  Sections: ReducersSection,
  Image: ImageReducer,
  form: FormReducer,
  Video: VideoReducer,
  UploadReduer: UploadReduer,
  forgetPassword: ForgetPasswordReducer,
  mycourses: ReducerUserCourses,
  instructorcourse: FetchInsCourseReducer,
  FetchPending: FetchPendingReducer,
  Users: FetchUsersReducer,
  user: FetchAUserReducer,
});
