import React from 'react';
import ReduxForm from '../Components/ReduxForm/ReduxForm.tsx';

const ContactPage: React.FC = () => {
  const submit = () => {
    console.log("test")
  };

  return <>
     <ReduxForm onSubmit={submit} />
  </>;
};

export default ContactPage;
