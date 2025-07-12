import React from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
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
              {/*<Field name='fullName' />*/}
              <Field
                name='fullName'
                as={TextField}
                label='Full Name'
                variant='standard'
              />

              {/*<Field name='initialInvestment' type='number' />*/}
              <Field
                name='initialInvestment'
                type='number'
                as={TextField}
                label='Initial Investment'
                variant='standard'
              />

              {/*<Field name='investmentRisk' value='High' type='checkbox' />*/}
              {/*<Field name='investmentRisk' value='Medium' type='checkbox' />*/}
              {/*<Field name='investmentRisk' value='Low' type='checkbox' />*/}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Label'
              />

              {/*<Field name='commentAboutInvestmentRisk' as='textarea' />*/}
              <Field
                name='commentAboutInvestmentRisk'
                as={TextField}
                multiline
                rows={3}
                rowsMax={10}
                variant='standard'
              />

              {/*<Field name='dependents' as='select'>*/}
              {/*  <option value={0}>0</option>*/}
              {/*  <option value={1}>1</option>*/}
              {/*  <option value={2}>2</option>*/}
              {/*  <option value={3}>3</option>*/}
              {/*  <option value={4}>4</option>*/}
              {/*  <option value={5}>5</option>*/}
              {/*</Field>*/}
              <Field name='dependents' as={TextField} select>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Field>

              {/* If you don't add value into the checkbox field like the investmentRisk field, it will just default to true|false value */}
              <Field name='acceptedTermsAndConditions' type='checkbox' />

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
