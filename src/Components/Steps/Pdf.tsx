import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Container, Typography } from '@material-ui/core';
import FileField from '../Common/FileField.tsx';

import { validatePDFForm } from '../../utils/validate.tsx';


const PdfUploadForm = ({ handleSubmit, pristine, submitting }) => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" style={{ color: '#fff' }} gutterBottom>
                Upload Your Resume
            </Typography>
            <form className='form-container' onSubmit={handleSubmit}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="body1" align="center" style={{ color: '#fff' }} gutterBottom>
                        Your Resume:
                    </Typography>
                    <Field
                        name="resume"
                        component={FileField}
                        label="Upload Resume"
                        accept=".pdf"
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={pristine || submitting}
                    fullWidth
                >
                    Submit
                </Button>

            </form>
        </Container>
    );
};

export default reduxForm({
    form: 'customForm',
    destroyOnUnmount: false,
    validate: validatePDFForm
})(PdfUploadForm);
