import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, Container, RadioGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MyRadio } from './MyRadioButton/MyRadioButton';
import { MyTextField } from './MyTextField/MyTextField';
import { useActions } from '../../hooks/useAction';
import FormikAutocomplete from './FormikAutocomplete/FormikAutocomplete';
import qs from 'qs';

const useStyle = makeStyles((theme?: any) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  cityName: {
    value: '',
    label: '',
  },
  vacationName: '',
  histogram: 'vacation',
};

const FORM_VALIDATION = Yup.object().shape({
  vacationName: Yup.string().required('Required'),
  histogram: Yup.string().required('Required'),
});

export const FormAnalitics: React.FC = () => {
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const { data__getItems } = useActions();

  useEffect(() => {
    const { name, area } = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    const loadItems = async () => {
      setSubmitting(true);
      if (typeof name === 'string' && typeof area === 'string') {
        await data__getItems(name, area);
      }
      setSubmitting(false);
    };
    loadItems();
  }, [history.location, setSubmitting]);

  const classes = useStyle();

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={async (values) => {
        history.push({
          pathname: '/analytics',
          search: `?name=${values.vacationName}&area=${values.cityName.value}`,
        });
      }}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Данные для составления гистограммы</Typography>
                </Grid>

                <Grid item xs={6} style={{ lineHeight: '80px', padding: '24px 10px 0 0' }}>
                  <MyTextField name="vacationName" value="vacationName" label="Поиск" />
                </Grid>

                <Grid item xs={6}>
                  <FormikAutocomplete
                    name="cityName"
                    textfieldprops={{
                      fullWidth: true,
                      margin: 'normal',
                      variant: 'outlined',
                      label: 'Город',
                    }}
                  />
                </Grid>

                <Grid item xs={6} container direction="row" justify="space-around">
                  <RadioGroup row>
                    <MyRadio name="histogram" label="vacation" type="radio" value="vacation" />
                    <MyRadio name="histogram" label="resume" type="radio" value="resume" />
                  </RadioGroup>
                </Grid>

                <Grid item xs={6} container direction="row" justify="center">
                  <Button
                    disabled={submitting}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
};
