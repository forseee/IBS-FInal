import React from 'react';
import { useField, FieldAttributes } from 'formik';
import { FormControlLabel, Radio } from '@material-ui/core';

type MyRadioProps = { label: string } & FieldAttributes<{}>;

export const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};
