import React from "react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label class="form-label">{label}</label>
    <div>
      <input
        class="form-control form-control-lg"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
export const renderTextArea = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label class="form-label">{label}</label>
    <div>
      <textarea
        class="form-control form-control-lg"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
