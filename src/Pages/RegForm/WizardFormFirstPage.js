import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="Age" type="number" component={renderField} label="Age" />
      <br />
      <div>
        <label class="form-label" style={{ fontSize: "20px" }}>
          Gender
        </label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
              class="form-label"
            />{" "}
            Male
          </label>
          <br />
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
              class="form-label"
            />{" "}
            Female
          </label>
          <br />
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="other"
              class="form-label"
            />{" "}
            Other
          </label>
          <br />
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <br />
      <div>
        <br />
        <button type="submit" class="btn btn-outline-dark mb-24pt mb-sm-0 ">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "registration", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
