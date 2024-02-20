export interface PersonalErrors {
  firstName?: string;
  lastName?: string;
  age?: string;
  gender?: string;
}

export interface EducationErrors {
  schoolName?: string;
  major?: string;
  language?: string;
}

export interface ExperienceErrors {
  companyName?: string;
  position?: string;
  year?: string;
}

export interface PDFUploadErrors {
  pdf?: string;
}

export const validatePersonal = (values: Record<string, any>): PersonalErrors => {
  const errors: PersonalErrors = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter your name.';
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter your last name.';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Age should be a number.';
  } else if (Number(values.age) < 0) {
    errors.age = 'Age must be a positive number';
  }
  else if (Number(values.age) < 18) {
    errors.age = 'You should be older than 18.';
  }
  if (!values.gender) {
    errors.gender = 'Please select your gender.';
  }
  return errors;
};

export const validateEducation = (values: Record<string, any>): EducationErrors => {
  const errors: EducationErrors = {};
  if (!values.schoolName) {
    errors.schoolName = 'Please enter your University name.';
  }
  if (!values.major) {
    errors.major = 'Please enter your Major.';
  }
  if (!values.language) {
    errors.language = 'Please enter your deparment language.';
  }
  return errors;
};

export const validateExperience = (values: Record<string, any>): ExperienceErrors => {
  const errors: ExperienceErrors = {};
  if (!values.companyName) {
    errors.companyName = 'Please enter your current company.';
  }
  if (!values.position) {
    errors.position = 'Please enter your current role.';
  }
  if (!values.year) {
    errors.year = 'Please enter your experience year.';
  } else if (isNaN(Number(values.year))) {
    errors.year = 'Year should be a number.';
  }
  return errors;

};

export interface PDFUploadErrors {
  pdf?: string;
  coverLetter?: string;
}


export const validatePDFForm = (values: Record<string, any>): PDFUploadErrors => {
  const errors: PDFUploadErrors = {};
  if (!values.resume || !values.resume.name) {
    errors.pdf = 'Please upload a PDF file.';
  }
  return errors;
};
