import React, { useState } from 'react';
import ReduxForm from '../Components/ReduxForm/ReduxForm.tsx';
import { Typography, AppBar, Toolbar } from '@material-ui/core';


import './index.css';

const ContactPage = () => {

  const [submit, setSubmit] = useState(false);
  
  const setSubmitStatus = () => {
    setSubmit(true);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{ submit ? 'Applied for the role!' : 'Apply for role!'}</Typography>
        </Toolbar>
      </AppBar>
      <ReduxForm setSubmitStatus={setSubmitStatus}/>
    </>
  );
};

export default ContactPage;