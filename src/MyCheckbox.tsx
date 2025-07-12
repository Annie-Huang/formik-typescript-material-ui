import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

export const MyCheckbox = () => {
  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
  );
};
