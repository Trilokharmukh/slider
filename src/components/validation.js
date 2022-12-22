import * as Yup from "yup";

const validation = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[A-Za-z]+$/i, 'Please enter valid first name')
        .max(10,"maximux chacter should be 10")
        .required("First name is required"),

    lastName: Yup.string()
        .matches(/^[A-Za-z]+$/i, 'Please enter valid last name')
        .max(40),

    email: Yup.string()
        .email("Please enter correct email address")
        .required("Email is required"),
});

export { validation };
