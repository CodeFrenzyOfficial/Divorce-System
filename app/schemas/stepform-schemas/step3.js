import * as Yup from "yup";

const Step3 = Yup.object().shape({
  property: Yup.string().required("Select Yes Or No"),
  debt: Yup.string().trim().required("Select Yes Or No"),
});

export default Step3;
