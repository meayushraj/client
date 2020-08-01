import axios from "axios";

export const OrderAction = (orderdetails, history) => async (dispatch) => {
  console.log(orderdetails);
  const res = axios.post("", orderdetails);
  dispatch({ type: "ORDER", payload: res.data });
  // history.push("/student-dashboard");
};
