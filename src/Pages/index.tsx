import React from 'react';
import ContactForm from '../Components/ReduxForm/ReduxForm.tsx';

const ContactPage: React.FC = () => {
  const submit = (values: any) => {
    console.log(values);
  };

  return <ContactForm onSubmit={submit} />;
};

export default ContactPage;
