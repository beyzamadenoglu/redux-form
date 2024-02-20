import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';


import { validateEducation } from '../../utils/validate.tsx';

export interface EducationFormData {
  schoolName: string;
  major: string;
  language: string;
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

const renderRadioGroup = ({
  input,
  ...rest
}: any) => (
  <RadioGroup {...input} {...rest} />
);

const EducationForm: React.FC<InjectedFormProps<EducationFormData>> = ({
  pristine,
  submitting,
  handleSubmit
}) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Enter your college details
      </Typography>
      <div>
        <Field
          name="schoolName"
          component={renderTextField}
          label="School Name"
        />
      </div>
      <div>
        <Field
          name="major"
          component={renderTextField}
          label="Major"
        />
      </div>
      <div>
        <Field
          name="language"
          component={renderRadioGroup}
        >
          <FormControlLabel
            value="english"
            control={<Radio />}
            label="English"
          />
          <FormControlLabel
            value="turkish"
            control={<Radio />}
            label="Turkish"
          />
        </Field>
      </div>
      <div>
        <Button disabled={pristine || submitting} type="submit" variant="contained" color="primary">
          Next
        </Button>
      </div>
    </form>
  );
};

export default reduxForm<EducationFormData>({
  form: 'customForm',
  destroyOnUnmount: false,
  validate: validateEducation
})(EducationForm);
