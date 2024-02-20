import React, { useState } from 'react';
import { connect } from 'react-redux';
import PersonalForm from '../Steps/Personal.tsx';
import EducationForm from '../Steps/Education.tsx';
import ExperienceForm from '../Steps/Experience.tsx';
import PDFUploadForm from '../Steps/Pdf.tsx';
import { LinearProgress, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import FormValues from '../Common/FormValues.tsx'

import './index.css';

const ReduxForm = ({ formValues, setSubmitStatus }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handlePersonalSubmit = () => {
    nextStep();
  };

  const handleEducationSubmit = () => {
    nextStep();
  };

  const handleExperienceSubmit = () => {
    nextStep();
  };

  const handlePDFSubmit = () => {
    setSubmitStatus();
    nextStep();
  };

  return (
    <>
      <div className="form-progress">
        <LinearProgress variant="determinate" value={(step / 5) * 100} />
      </div>

      {step > 1 && step < 5 && (
        <IconButton onClick={prevStep} color="primary">
          <ArrowBack />
        </IconButton>
      )}
      {step === 1 && <PersonalForm onSubmit={handlePersonalSubmit} />}
      {step === 2 && <EducationForm onSubmit={handleEducationSubmit} />}
      {step === 3 && <ExperienceForm onSubmit={handleExperienceSubmit} />}
      {step === 4 && <PDFUploadForm onSubmit={handlePDFSubmit} />}
      {step === 5 && <FormValues data={formValues.customForm.values} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  formValues: state.form,
});

export default connect(mapStateToProps)(ReduxForm);
