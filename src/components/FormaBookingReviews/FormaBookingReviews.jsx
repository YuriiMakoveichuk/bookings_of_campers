import { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { useId } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

import "react-datepicker/dist/react-datepicker.css";

import css from "./FormaBookingReviews.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookingReviewsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  comment: Yup.string(),
});

const FormaBookingReviews = () => {
  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commentId = useId();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectingStartDate, setSelectingStartDate] = useState(true);

  useEffect(() => {
    if (startDate && endDate) {
      setSelectingStartDate(false);
    }
  }, [startDate, endDate]);

  const handleSubmit = (values, actions) => {
    console.log("values", values);
    toast.success("Booking successful!");
    actions.resetForm();
    setStartDate(null);
    setEndDate(null);
    setSelectingStartDate(true);
  };

  return (
    <div className={css.box}>
      <h2 className={css.title}>Book your camper an now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingReviewsSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor={nameId}>
              <Field
                className={css.field}
                type="text"
                name="name"
                id={nameId}
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </label>
            <label className={css.label} htmlFor={emailId}>
              <Field
                className={css.field}
                type="text"
                name="email"
                id={emailId}
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label} htmlFor={dateId}>
              <DatePicker
                selected={selectingStartDate ? startDate : endDate}
                onChange={(date) => {
                  if (selectingStartDate) {
                    setStartDate(date);
                    setFieldValue("date", `${date.toLocaleDateString()} - `);
                    setSelectingStartDate(false);
                  } else {
                    setEndDate(date);
                    setFieldValue(
                      "date",
                      `${startDate.toLocaleDateString()} - ${date.toLocaleDateString()}`
                    );
                  }
                }}
                placeholderText={
                  selectingStartDate
                    ? "Booking date"
                    : "Select a date between today"
                }
                className={css.field}
                id={dateId}
                dateFormat="yyyy/MM/dd"
                onFocus={() => {
                  if (selectingStartDate && startDate) {
                    setSelectingStartDate(true);
                  }
                }}
              />
              <ErrorMessage
                className={css.error}
                name="date"
                component="span"
              />
            </label>
            <label className={css.label} htmlFor={commentId}>
              <Field
                as="textarea"
                className={clsx(css.field, css.textarea)}
                type="text"
                name="comment"
                id={commentId}
                placeholder="Comment"
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </label>
            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormaBookingReviews;
