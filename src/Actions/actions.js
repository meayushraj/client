import axios from "axios"
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode"

export const LoginAction = (credentials) => (dispatch) => {
  axios
    .post("/user/login", credentials)
    .then((res) => {
      const { token } = res.data
      //set token to ls
      localStorage.setItem("token", token)
      //set token to auth heder
      setAuthToken(token)
      //decode the token
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch((err) => console.log(err))
}

export const setCurrentUser = (decoded) => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  }
}

export const SingupAction = (credentials, history) => (dispatch) => {
  axios
    .post("/user/register", credentials)
    .then((res) => history.push("/login"))
    .catch((err) => console.log(err))
}

//logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token")
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}

export const ForgotPasswordAction = (data, history) => async (dispatch) => {
  console.log("forget password ation")
  const response = await axios.put("/user/forgot-password", data)
  dispatch({ type: "FORGOT", payload: response.data })
}

export const ResetPasswordAction = (newPassword, token, history) => async (
  dispatch
) => {
  console.log("reset password ation")
  const response = await axios.put(`/user/reset-password/${token}`, newPassword)
  history.push("/login")
  dispatch({ type: "RESET-PASSWORD", payload: response.data })
}

//Action to fetch all the courses
export const FetchCourseAction = () => async (dispatch) => {
  const response = await axios.get("")
  dispatch({ type: "FETCH_COURSES", payload: response.data })
}
//Action to fetch courses of a instructor
export const FetchInstructorCoursesAction = () => async (dispatch) => {
  const response = await axios.get("")
  dispatch({ type: "FETCH_INSTRUCTOR_COURSES", payload: response.data })
}
//Action to add course by the instructor
export const AddCourseAction = (formValues) => async (dispatch, getState) => {
  const sections = getState().Sections
  console.log(sections)
  const res = await axios.post("", { ...formValues, sections })
  dispatch({ type: "ADD_COURSE", payload: res.data })
}
//This is a basic action which adds a section to the reducers and from the reducers state we got this state in as sections in the AddCourseAction creator
export const AddSectionAction = (sections) => {
  return {
    type: "ADD_SECTION",
    payload: sections
  }
}

export const UploadImageAction = (formData, options, filename) => (
  dispatch
) => {
  axios
    .get("/image/test", formData, options, filename)
    .then((res) => {
      console.log(res)
      dispatch({ type: "UPLOAD_IMAGE", payload: res.data })
    })
    .catch((err) => console.log(err))
}

// export const UploadImageAction = (formData, options, filename) => {
//    axios.post("/image/upload", formData, options, filename).then((res) => {
//     console.log(res)
//     dispatch({ type: "UPLOAD_IMAGE", payload: res.data }).catch((err)=>console.log(err))

//     // this.setState({ per: 100 }, () => {
//     //   setTimeout(() => {
//     //     this.setState({ per: 0 })
//     //   }, 1000)
//     // })
//   }
// }
