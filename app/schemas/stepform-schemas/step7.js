import * as Yup from "yup";

const Step7 = Yup.object().shape({
  divide_debt: Yup.string().required("Select One Option"),
});

export default Step7;
