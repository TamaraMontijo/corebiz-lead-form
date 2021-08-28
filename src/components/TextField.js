import React from "react";
import { useField } from "formik";

export const TextField = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // <div>
    <input
      className={`${className} form-control shadow-none ${
        meta.touched && meta.error && "is-invalid"
      }`}
      {...field}
      {...props}
      autoComplete="off"
    />
  );
};
