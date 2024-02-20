import React, { useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

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
    type="text" // Change the type to "text"
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      input.onChange(event.target.value);
    }}
  />
);

const ExperienceForm: React.FC<InjectedFormProps<ExperienceFormData>> = ({
  handleSubmit,
  pristine,
  submitting
}) => {
  const [hasExperience, setHasExperience] = useState('no');

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasExperience(event.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Do you have work experience?
      </Typography>
      <div>
        <RadioGroup
          aria-label="Has Experience"
          name="hasExperience"
          value={hasExperience}
          onChange={handleExperienceChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </div>
      {hasExperience === 'yes' && (
        <>
          <div>
            <Field name="companyName" component={renderTextField} label="Company Name" />
          </div>
          <div>
            <Field name="position" component={renderTextField} label="Position" />
          </div>
          <div>
            <Field name="year" component={renderTextField} label="Year" />
          </div>
        </>
      )}
      <div>
        <Button disabled={pristine || submitting} type="submit" variant="contained" color="primary">
          Next
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<ExperienceFormData>({
  form: 'customForm',
  destroyOnUnmount: false,
  validate: validateExperience
})(ExperienceForm);
