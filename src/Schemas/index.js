import * as Yup from "yup";

const phoneRegExp =
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
export const formValidaion = Yup.object({
  name: Yup.string().min(2).max(15).required("Name field is required"),
  email: Yup.string().email().required("Email field is required"),
  phone_number: Yup.string()
    .required("phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  company: Yup.string().min(3).required("company name is required"),
  price: Yup.string().required("check at least one"),
});
