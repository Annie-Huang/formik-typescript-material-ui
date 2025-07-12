import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Formik } from 'formik';

const INITIAL_FORM_STATE = {};

export const FormDemo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>New Account</Typography>
        <Formik initialValues={{ ...INITIAL_FORM_STATE }} onSubmit={() => {}}>
          {({ values, errors, isSubmitting, isValidating }) => <div></div>}
        </Formik>
      </CardContent>
    </Card>
  );
};
