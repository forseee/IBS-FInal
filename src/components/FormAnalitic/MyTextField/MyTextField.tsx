import React from 'react';
import { TextField } from '@material-ui/core';
import { useField, FieldAttributes } from 'formik';

type MyTextFieldProps = { label: string } & FieldAttributes<{}>;

export const MyTextField: React.FC<MyTextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      helperText={errorText}
      error={!!errorText}
      fullWidth
    />
  );
};
