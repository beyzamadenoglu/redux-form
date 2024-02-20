import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import MaterialUiForm from '../Steps/Personal.tsx';
import EducationForm from '../Steps/Education.tsx';
import ExperienceForm from '../Steps/Experience.tsx';

const ReduxForm = ({ formValues }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const handlePersonalSubmit = () => {
    nextStep();
  };

  const handleEducationSubmit = () => {
    nextStep();
  };

  const handleExperienceSubmit = () => {
    nextStep();
    console.log('Combined Form Values:', formValues);
  };

  return (
    <>
      {step === 1 && <MaterialUiForm onSubmit={handlePersonalSubmit} />}
      {step === 2 && <EducationForm onSubmit={handleEducationSubmit} />}
      {step === 3 && <ExperienceForm onSubmit={handleExperienceSubmit} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  formValues: getFormValues('customForm')(state),
});

export default connect(mapStateToProps)(ReduxForm);
