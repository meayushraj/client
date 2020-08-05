import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const AdminAddCourseAction = (history) => async (dispatch, getState) => {
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
  const res = await axios.post("/admin/add-course", course);

  dispatch({ type: "ADD_COURSE", payload: res.data });
  history.push("/");
};

export const AdminEditCourseAction = (history, id) => async (
  dispatch,
  getState
) => {
  const sections = getState().Sections;
  const formValues = getState().form.editcourse.values;
  console.log(sections);
  console.log(formValues);
  var course = { ...formValues, sections };
  if (!getState().Image[0]) {
    console.log("No new Image");
  } else {
    console.log("new Image");
    const image = getState().Image[0].data.downloadImageUrl;
    course = { ...course, image };
  }
  if (!getState().Video.data) {
    console.log("No new Video added");
  } else {
    console.log("New Video Added");
    const video = getState().Video.data.downloadVideoUrl;
    course = { ...course, video };
  }
  console.log(course);
  const res = await axios.put(`/admin/all-course/${id}`, course); //give edit course route here
  dispatch({ type: "EDIT_COURSE", payload: res.data });
  history.push("/admin/dashboard");
};

export const AdminDeleteAction = (id, history) => async (dispatch) => {
  const res = await axios.delete(`/admin/all-course/${id}`);
  history.push("/admin/dashboard");
  dispatch({ type: "DEL_STREAM", payload: id });
};
