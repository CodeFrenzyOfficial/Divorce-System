import * as Yup from "yup";

const Step6 = Yup.object().shape({
  divide_things: Yup.string().required("Select One Option"),
});

export default Step6;
