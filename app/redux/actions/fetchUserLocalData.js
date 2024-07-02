export const fetchLocalUserData = () => async (dispatch) => {
  try {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("userData"));
      dispatch({
        type: "SET_LOCAL_USER_DATA",
        payload: userData?.userData,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
