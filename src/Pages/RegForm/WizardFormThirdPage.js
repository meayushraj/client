import React from "react";
import { Field, reduxForm, submit, formValues } from "redux-form";
import validate from "./validate";
import { render } from "react-dom";
import { connect } from "react-redux";
import { SingupAction } from "../../Actions/actions";
const foi = [
  "Web Development",
  "Android Development",
  "Cloud",
  "React",
  "Angular",
  "Machine Learning",
  "Artificial Intelligence",
];

const renderInterestSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select your Field of Interest...</option>
      {foi.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

class WizardFormThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newUser: this.props.newUser };
  }
  submit = (formValues) => {
    console.log(formValues);
    console.log(this.state.newUser);
    const newUser = { ...this.state.newUser, formValues };
    console.log(newUser);
    this.props.SingupAction(newUser, this.props.history);
  };
  render() {
    console.log(this.props);
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <label class="form-label">Field of Interest</label>
          <Field name="FieldOfInterest" component={renderInterestSelector} />
        </div>
        <div>
          <br />
          <label class="form-label" htmlFor="instructor">
            Are you a instructor?
          </label>
          <div>
            <Field
              name="instructor"
              id="instructor"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <br />
          <button
            style={{ float: "left" }}
            type="button"
            class="btn btn-outline-dark mb-24pt mb-sm-0 "
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            style={{ float: "right" }}
            type="submit"
            class="btn btn-outline-dark mb-24pt mb-sm-0 "
            disabled={pristine || submitting}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default connect(null, { SingupAction })(
  reduxForm({
    form: "registration", //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  })(WizardFormThirdPage)
);
