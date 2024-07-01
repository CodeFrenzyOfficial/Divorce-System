import * as Yup from "yup";

const Step5 = Yup.object().shape({
  current_home: Yup.string().required("Select One Option"),
});

export default Step5;
