import * as Yup from "yup";

const Step4 = Yup.object().shape({
  petitioner: Yup.string().required("Select One Option"),
});

export default Step4;
