import {
    object,
    number,
    string
} from "yup";

const phoneRegExp = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
export const formSchema = object().shape({
    mobile: string()
        .required("شماره موبایل الزامی می باشد.")
        .matches(phoneRegExp, "شماره موبایل صحیح نمی باشد."),
    // password: string().required("رمز الزامی می باشد."),
    date:string()
    .required("تاریخ الزامی می باشد."),
    type:string()
    .required("نوع بیمه الزامی می باشد.")
});

export const passwordSchema = object().shape({
    password: string().required("رمز الزامی می باشد."),
});
export const VerificationSchema = object().shape({});