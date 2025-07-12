import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { InvestmentDetails } from './InvestmentDetails';

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false,
};

export const FormDemo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>New Account</Typography>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Field name='fullName' />
              <Field name='initialInvestment' type='number' />

              <Field name='investmentRisk' value='High' type='checkbox' />
              <Field name='investmentRisk' value='Medium' type='checkbox' />
              <Field name='investmentRisk' value='Low' type='checkbox' />

              <Field name='commentAboutInvestmentRisk' as='textarea' />

              <Field name='dependents' as='select'>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Field>

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
