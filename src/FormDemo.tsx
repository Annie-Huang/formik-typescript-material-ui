import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikBag,
  FormikHelpers,
} from 'formik';
import { InvestmentDetails } from './InvestmentDetails';
import { MyCheckbox } from './MyCheckbox';
import * as Yup from 'yup';
import { array, boolean, mixed, number, string } from 'yup';

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false,
};

const FORM_VALIDATION = Yup.object().shape({
  fullName: string().required('Your name is mandatory!!!').min(2).max(100),
  initialInvestment: number().required().min(100),
  dependents: number().required().min(0).max(5),
  acceptedTermsAndConditions: boolean().oneOf([true]),
  investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1),
  // This original code is not working:
  // commentAboutInvestmentRisk: mixed().when('investmentRisk', {
  //   is: (investmentRisk: string[]) =>
  //     investmentRisk.find((ir) => ir === 'High'),
  //   then: string().required().min(20).max(100),
  //   otherwise: string().min(20).max(100),
  // }),

  // https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik
  commentAboutInvestmentRisk: string().when(
    'investmentRisk',
    ([investmentRisk]) => {
      if (investmentRisk.some((ir: string) => ir === 'High'))
        return string().required().min(20).max(100);
      return string().min(20).max(100);
    },
  ),
});

export const FormDemo = () => {
  const onSubmit = async (
    values: InvestmentDetails,
    formikHelpers: FormikHelpers<InvestmentDetails>,
  ) => {
    // console.log('get into here....');
    return new Promise((res: any) => {
      setTimeout(() => {
        console.log(values);
        console.log(formikHelpers);
        console.log('---------');
        res();
      }, 1000);
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>New Account</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={FORM_VALIDATION}
          onSubmit={onSubmit}
        >
          {({ values, errors, isSubmitting, isValidating, touched }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <FormGroup>
                  {/*<Field name='fullName' />*/}
                  <Field
                    name='fullName'
                    as={TextField}
                    label='Full Name'
                    variant='standard'
                  />
                  {/*{touched.fullName && errors.fullName ? errors.fullName : null}*/}
                  <ErrorMessage name='fullName' />
                </FormGroup>
              </Box>

              <Box sx={{ mb: 2 }}>
                <FormGroup>
                  {/*<Field name='initialInvestment' type='number' />*/}
                  <Field
                    name='initialInvestment'
                    type='number'
                    as={TextField}
                    label='Initial Investment'
                    variant='standard'
                  />
                  <ErrorMessage name='initialInvestment' />
                </FormGroup>
              </Box>

              <Box sx={{ mb: 2 }}>
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
                  {/* If you click Very low checkbox, you will see "investmentRisk[0] must be one of the following values: High, Medium, Low" error */}
                  <MyCheckbox
                    name='investmentRisk'
                    value='Very low'
                    label='Very low'
                  />
                </FormGroup>
                <ErrorMessage name='investmentRisk' />
              </Box>

              <Box sx={{ mb: 2 }}>
                <FormGroup>
                  {/*<Field name='commentAboutInvestmentRisk' as='textarea' />*/}
                  <Field
                    name='commentAboutInvestmentRisk'
                    as={TextField}
                    multiline
                    rows={3}
                    rowsMax={10}
                    variant='standard'
                    label='Comment About Investment Risk'
                  />
                  <ErrorMessage name='commentAboutInvestmentRisk' />
                </FormGroup>
              </Box>

              <Box sx={{ mb: 2 }}>
                <FormGroup>
                  {/*<Field name='dependents' as='select'>*/}
                  {/*  <option value={0}>0</option>*/}
                  {/*  <option value={1}>1</option>*/}
                  {/*  <option value={2}>2</option>*/}
                  {/*  <option value={3}>3</option>*/}
                  {/*  <option value={4}>4</option>*/}
                  {/*  <option value={5}>5</option>*/}
                  {/*</Field>*/}
                  <Field
                    name='dependents'
                    label='dependents'
                    as={TextField}
                    select
                    variant='standard'
                  >
                    {/* Need to add -1 item otherwise you will get
                        MUI: You have provided an out-of-range value `-1` for the select (name="dependents") component. */}
                    <MenuItem value={-1}>Select ...</MenuItem>

                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <ErrorMessage name='dependents' />
                </FormGroup>
              </Box>

              <Box sx={{ mb: 2 }}>
                <FormGroup>
                  {/* If you don't add value into the checkbox field like the investmentRisk field, it will just default to true|false value */}
                  {/*<Field name='acceptedTermsAndConditions' type='checkbox' />*/}
                  <MyCheckbox
                    name='acceptedTermsAndConditions'
                    label='Accept terms and conditions'
                  />
                  <ErrorMessage name='acceptedTermsAndConditions' />
                </FormGroup>
              </Box>

              <Button type='submit' variant='contained' disabled={isSubmitting}>
                Submit
              </Button>

              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
