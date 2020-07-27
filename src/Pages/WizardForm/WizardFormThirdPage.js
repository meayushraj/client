import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField } from "./renderField";
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav";

const WizardFormThirdPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md-8">
            <div class="page-separator">
              <div class="page-separator__text">Cost of your Course</div>
            </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="Price"
                type="number"
                component={renderField}
                label="Price"
              />
              <br />
              <br />
              <div>
                <UploadImageVaishnav title="Add Your Cover Image Here" />
                <br />
                <br />
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0"
                  type="button"
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0"
                  type="submit"
                  style={{ float: "right" }}
                >
                  next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
