import * as Yup from "yup";

const Step9 = Yup.object().shape({
  do_you_owe_money: Yup.string().required("Select One Option"),
  spouse_owe_you_money:
    Yup.string().required("Select One Option"),
});

export default Step9;
