import * as yup from 'yup';

export const schema = yup.object({
  username: yup.string().required('Username is q required field'),
  phoneNumber: yup
    .string()
    .required('Phone number is a required field')
    .matches(/^\+92-\d{3}-\d{7}$/, 'Phone number is not valid !'),
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email is not valid!'),
  password: yup.string().min(6, 'Password must be at least 6 chacters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be match.'),
  // confirmPassword: yup.string().oneOf(['usman', 'moqueet']),
});
