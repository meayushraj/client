import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea } from "./renderField";
import UploadVideo from "../../Upload/uploadvideo";

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md">
            <div class="page-separator">
              <div class="page-separator__text">Basic information</div>
            </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="Title"
                type="text"
                component={renderField}
                label="Title"
              />
              <br />

              <Field
                name="Discription"
                type="text"
                component={renderField}
                label="Short Discription"
              />
              <div>
                <br />
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0 "
                  type="submit"
                  style={{ width: "150px" }}
                >
                  Next
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
})(WizardFormFirstPage);
