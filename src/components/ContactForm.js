import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function ContactForm() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    last_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Required"),
    phone_number: Yup.string()
      .required("Required")
      .matches(phoneRegExp, "Phone number is not valid"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const res = await axios.post(
      "https://website-8e96e-default-rtdb.firebaseio.com/ContactData.json",values
    );
    console.log("Form submitted with values:", res.data);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="flex flex-col space-y-4 max-w-full pt-11 m-2">
              <div className="flex space-x-6 ">
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  className="border border-gray-400 rounded-md h-16 w-1/2 pl-4 placeholder-gray-500 text-lg"
                />

                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-600"
                />
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  className="border border-gray-400 rounded-md h-16 w-1/2 pl-4 placeholder-gray-500 text-lg"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex space-x-6 ">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 rounded-md h-16 w-1/2 pl-4 placeholder-gray-500 text-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />

                <Field
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Phone Number"
                  className="border border-gray-400 rounded-md h-16 w-1/2 pl-4 placeholder-gray-500 text-lg"
                />
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className=" flex space-y-11">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Start writing message here"
                  className="border border-gray-400 rounded-md h-40 w-full p-6 placeholder-gray-500 text-xl"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-700 w-[150px] rounded-2xl h-12 text-xl font-bold text-white m-5"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
