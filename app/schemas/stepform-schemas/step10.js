import * as Yup from "yup";

const Step10 = Yup.object().shape({
  united_states_military: Yup.string().required("Select One Option"),
});

export default Step10;
