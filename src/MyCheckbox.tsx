import React, { FC } from 'react';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { useField } from 'formik';

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}

export const MyCheckbox: FC<MyCheckboxProps> = (props) => {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value,
  });

  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
  );
};
