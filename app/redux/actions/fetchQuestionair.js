import axios from "axios";

export const fetchQuestionair = () => async (dispatch) => {
  try {
    const URL = process.env.BASE_URL + "/auth/readQuestionnaire";

    const res = await axios.get(URL, {
      headers: { token: `${process.env.TOKEN}` },
    });
    
    dispatch({
      type: "SET_QUESTIONAIR",
      payload: res.data.data.questionnaire.steps,
    });
  } catch (error) {
    console.log(error.message);
  }
};
