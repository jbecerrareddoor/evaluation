'use client'


// GENIE GPT prompt of the component description
// This is a react component which uses TailwindCSS, Formik, and Yup.
// It implements a form with a text input called "StartDate" as well as a submit button.
// "StartDate" field is required and its maximum length is 64 characters
// The form will handle the submit by logging it to the console
 
// Importing necessary libraries and methods
import { ErrorMessage,Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

// Define a validation schema using Yup to enforce constraints on the form fields
const validationSchema = Yup.object({
  StartDate: Yup.string() // The field is expected to be a string
    .required('Start Date is required') // Marking the field as required with a custom error message
    .max(64, 'Start Date cannot be longer than 64 characters'), // Set a max length of 64 characters
});

// Initial values for the form fields
const initialValues = {
  StartDate: '', // Initial value for StartDate field is an empty string
};

// Our main Form component
const MyFormComponent = () => {
  
  // Function to handle the form submission
  const handleSubmit = (values) => {
    // Log the form values to the console upon submission
    console.log('Form data', values);
  };

  return (
    // Using TailwindCSS classes for styling
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">My Form</h1>
      
      {/* Formik component to manage form state */}
      <Formik
        initialValues={initialValues} // Passing initial values
        validationSchema={validationSchema} // Passing validation schema
        onSubmit={handleSubmit} // Passing the submission handler
      >
        {(formik) => (
          // Form component that will render the actual form elements
          <Form>
            {/* Form field for StartDate */}
            <div className="mb-4">
              <label htmlFor="StartDate" className="block text-gray-700 text-sm font-bold mb-2">
                Start Date
              </label>
              {/* Field component to connect input to Formik */}
              <Field
                name="StartDate"
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.StartDate && formik.errors.StartDate
                    ? 'border-red-500' // Conditional class to show validation errors
                    : ''
                }`}
                placeholder="Enter Start Date"
              />
              {/* ErrorMessage component to display validation messages */}
              <ErrorMessage name="StartDate" component="div" className="text-red-500 text-xs italic" />
            </div>

            {/* Submit button for the form */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={formik.isSubmitting} // Disable button while form is submitting
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Exporting the component so it can be used in other parts of our application
export default MyFormComponent;
