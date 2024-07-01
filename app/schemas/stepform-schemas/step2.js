import * as Yup from "yup";

const Step2 = Yup.object().shape({
  number_of_children: Yup.string().required("This Feild is required"),
  pregnancy_status: Yup.string().trim().required("Select Yes Or No"),
});

export default Step2;