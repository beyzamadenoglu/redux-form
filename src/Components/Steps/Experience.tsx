import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { validateExperience } from '../../utils/validate.tsx'; 

export interface ExperienceFormData {
  companyName: string;
  position: string;
  year: string;
}

const renderTextField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}: any) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const ExperienceForm: React.FC<InjectedFormProps<ExperienceFormData>> = ({
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="companyName"
          component={renderTextField}
          label="Company Name"
        />
      </div>
      <div>
        <Field
          name="position"
          component={renderTextField}
          label="Position"
        />
      </div>
      <div>
        <Field
          name="year"
          component={renderTextField}
          label="Year"
          type="number"
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Save and Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<ExperienceFormData>({
  form: 'customForm',
  validateExperience
})(ExperienceForm);
