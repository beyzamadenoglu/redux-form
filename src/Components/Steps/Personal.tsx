import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';


import { validatePersonal } from "../../utils/validate.tsx";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  gender: string;
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

const renderRadioGroup = ({ input, ...rest }: any) => (
  <RadioGroup {...input} {...rest} />
);

const PersonalForm: React.FC<InjectedFormProps<FormData>> = ({
  handleSubmit,
  pristine,
  submitting
}) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field
          name="lastName"
          component={renderTextField}
          label="Last Name"
        />
      </div>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
        />
      </div>
      <div>
        <Field
          name="age"
          component={renderTextField}
          label="Age"
        />
      </div>
      <div>
        <Field
          name="gender"
          component={renderRadioGroup}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
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

export default reduxForm<FormData>({
  form: 'customForm',
  destroyOnUnmount: false,
  validate: validatePersonal,
})(PersonalForm);
