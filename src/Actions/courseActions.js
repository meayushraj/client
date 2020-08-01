import axios from "axios";
import { get } from "mongoose";
import history from "../History";

//Action to fetch all the courses
export const FetchCourseAction = () => async (dispatch) => {
  console.log("all course action called");
  const response = await axios.get("/user/all-course");
  console.log(response);
  dispatch({ type: "FETCH_COURSES", payload: response.data });
};
//Action to fetch course by id
export const FetchCourseByIdAction = (id) => async (dispatch) => {
  console.log("get action by id");
  const res = await axios.get(`/instructor/all-course/${id}`);
  console.log(res);
  dispatch({ type: "FETCH_COURSEBYID", payload: res.data });
};

//Action to fetch courses of a instructor
export const FetchInstructorCoursesAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_INSTRUCTOR_COURSES", payload: response.data });
};
//Action to add course by the instructor
export const AddCourseAction = (history) => async (dispatch, getState) => {
  console.log(history);
  const sections = getState().Sections;
  const formValues = getState().form.wizard.values;
  const image = getState().Image[0].data.downloadImageUrl;
  const video = getState().Video.data.downloadVideoUrl;

  const currentUsername = getState().Credentials.user.username;
  const currentUserId = getState().Credentials.user.id;
  const currentUser = { currentUsername, currentUserId };

  console.log(sections);
  console.log(formValues);

  const course = { ...formValues, sections, currentUser, image, video };
  console.log(course);
  const res = await axios.post("/instructor/add-course", course);

  dispatch({ type: "ADD_COURSE", payload: res.data });
  history.push("/");
};
//This is a basic action which adds a section to the reducers and from the reducers state we got this state in as sections in the AddCourseAction creator
export const AddSectionAction = (sections) => {
  return {
    type: "ADD_SECTION",
    payload: sections,
  };
};
