import axios from "axios";

export const fetchStates = () => async (dispatch) => {
  try {
    const URL = process.env.BASE_URL + "/readStates";
    const res = await axios.get(URL);

    dispatch({
      type: "SET_STATES",
      payload: res?.data?.data?.states,
    });
    
  } catch (error) {
    console.log(error.message);
  }
};
