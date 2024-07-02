import * as Yup from "yup";

const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

const Step1 = Yup.object().shape({
  zipcode: Yup.string()
    .matches(zipCodeRegex, "Invalid ZIP code")
    .required("ZipCode is required"),
  location_of_spouse: Yup.string().trim().required("Select Yes Or No"),
});

export default Step1;
