import * as Yup from "yup";

const Step = Yup.object().shape({
  email: Yup.string().email().trim().required("Email is required"),
  agree_to_division: Yup.string().trim().required("Select Yes Or No"),
  firstname: Yup.string().required("First Name is required"),
  middlename: Yup.string().optional(),
  lastname: Yup.string().required("Last Name is required"),
});

export default Step;
