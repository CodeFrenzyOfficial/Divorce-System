import * as Yup from "yup";

const HomeFormSchema = new Yup.object({
  email: Yup.string().email().trim().required("Email is required"),
  agree_to_division: Yup.string().trim().required("Select Yes Or No"),
  state: Yup.string().trim().required("Please Select State"),
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
});

export default HomeFormSchema;