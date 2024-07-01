import axios from "axios";

export function getQuestionaire() {
  const URL = process.env.BASE_URL + "/auth/readQuestionnaire";
  const res = axios.get(URL, {
    headers: {
      token: `${process.env.TOKEN}`,
    },
  });

  return res
}
