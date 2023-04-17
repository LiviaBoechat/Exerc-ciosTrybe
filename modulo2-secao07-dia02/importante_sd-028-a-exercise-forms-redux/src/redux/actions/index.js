const SUBMIT_PERSONAL_INFO = 'SUBMIT_PERSONAL_INFO';
const SUBMIT_PROFESSIONAL_INFO = 'SUBMIT_PROFESSIONAL_INFO';

const submitPersonalInfo = (personalInfo) => ({
  type: SUBMIT_PERSONAL_INFO,
  payload: personalInfo,
});

const submitProfessionallInfo = (professionallInfo) => ({
  type: SUBMIT_PROFESSIONAL_INFO,
  payload: professionallInfo,
});

export {
  submitPersonalInfo,
  SUBMIT_PERSONAL_INFO,
  submitProfessionallInfo,
  SUBMIT_PROFESSIONAL_INFO };
