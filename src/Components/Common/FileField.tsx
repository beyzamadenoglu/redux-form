import React from 'react';
import { Field } from 'redux-form';
import { Button, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = {
  input: {
    display: 'none',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
};

const renderFileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: { touched, error },
  ...props
}) => {
  return (
    <>
      <input
        id="file-upload"
        type="file"
        accept=".pdf"
        onChange={event => onChange(event?.target.files[0])}
        onBlur={onBlur}
        style={styles.input}
        {...inputProps}
        {...props}
      />
      <label htmlFor="file-upload" style={styles.label}>
        <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
          Choose File
        </Button>
        <Typography variant="body1" component="span" style={{ marginLeft: '8px' }}>
          {inputProps.value ? inputProps.value.name : 'No file chosen'}
        </Typography>
      </label>
      {touched && error && <Typography color="error">{error}</Typography>}
    </>
  );
};

const FileField = props => {
  return <Field {...props} component={renderFileInput} />;
};

export default FileField;
