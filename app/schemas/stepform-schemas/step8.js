import * as Yup from "yup";

const Step8 = Yup.object().shape({
    you_have_other_sources_of_income:
      Yup.string().required("Select One Option"),
  spouse_have_other_sources_of_income:
    Yup.string().required("Select One Option"),
});

export default Step8;
