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
  
  export const validatePersonal = (values: Record<string, any>): PersonalErrors => {
    const errors: PersonalErrors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.age) {
      errors.age = 'Required';
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number';
    } else if (Number(values.age) < 0) {
      errors.age = 'Age must be a positive number';
    }
    if (!values.gender) {
      errors.gender = 'Required';
    }
    return errors;
  };
  
  export const validateEducation = (values: Record<string, any>): EducationErrors => {
    const errors: EducationErrors = {};
    if (!values.schoolName) {
      errors.schoolName = 'Required';
    }
    if (!values.major) {
      errors.major = 'Required';
    }
    if (!values.language) {
      errors.language = 'Required';
    }
    return errors;
  };
  
  export const validateExperience = (values: Record<string, any>): ExperienceErrors => {
    const errors: ExperienceErrors = {};
    if (!values.companyName) {
      errors.companyName = 'Required';
    }
    if (!values.position) {
      errors.position = 'Required';
    }
    if (!values.year) {
      errors.year = 'Required';
    }
    return errors;
  };
  