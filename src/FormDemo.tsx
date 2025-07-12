import React from 'react';
import {
  Card,
  CardContent,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { InvestmentDetails } from './InvestmentDetails';
import { MyCheckbox } from './MyCheckbox';

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
              <FormGroup>
                {/*<Field name='fullName' />*/}
                <Field
                  name='fullName'
                  as={TextField}
                  label='Full Name'
                  variant='standard'
                />
              </FormGroup>

              <FormGroup>
                {/*<Field name='initialInvestment' type='number' />*/}
                <Field
                  name='initialInvestment'
                  type='number'
                  as={TextField}
                  label='Initial Investment'
                  variant='standard'
                />
              </FormGroup>

              <FormGroup>
                {/*<Field name='investmentRisk' value='High' type='checkbox' />*/}
                {/*<Field name='investmentRisk' value='Medium' type='checkbox' />*/}
                {/*<Field name='investmentRisk' value='Low' type='checkbox' />*/}
                <MyCheckbox
                  name='investmentRisk'
                  value='High'
                  label='High - Super Risky'
                />
                <MyCheckbox
                  name='investmentRisk'
                  value='Medium'
                  label='Medium - Risky'
                />
                <MyCheckbox
                  name='investmentRisk'
                  value='Low'
                  label='Low - Safe'
                />
              </FormGroup>

              <FormGroup>
                {/*<Field name='commentAboutInvestmentRisk' as='textarea' />*/}
                <Field
                  name='commentAboutInvestmentRisk'
                  as={TextField}
                  multiline
                  rows={3}
                  rowsMax={10}
                  variant='standard'
                />
              </FormGroup>

              <FormGroup>
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
              </FormGroup>

              <FormGroup>
                {/* If you don't add value into the checkbox field like the investmentRisk field, it will just default to true|false value */}
                {/*<Field name='acceptedTermsAndConditions' type='checkbox' />*/}
                <MyCheckbox
                  name='acceptedTermsAndConditions'
                  label='Accept terms and conditions'
                />
              </FormGroup>

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
