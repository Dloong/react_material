import * as React from "react";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Button, LinearProgress, Box, InputAdornment } from "@material-ui/core";
import { TextField } from "formik-material-ui";
// import FormDatePicker from "../../components/form/FormDatePicker"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormPriceText from "../../components/form/FormPriceText";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "formik-material-ui-pickers";
import Adornment from "../../components/inputAdornment"
import AppHeader from "../../components/common/AppHeader"
const useStyles = makeStyles({
  inputAlign: {
    "& input": {
      textAlign: "center",
    },
  },
});

export default function FormDemo() {
  const classes = useStyles();
  return (
      <div>
          <AppHeader title={'Form'} />
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        date: "",
        price: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, "=======234");

        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form  className={classes.inputAlign}>
            <Field
              component={TextField}
              name="email"
              type="email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <Box pl={2}>
                    <InputAdornment position="start">Kg</InputAdornment>
                  </Box>
                ),
              }}
            />
            <br />
            <Field
              component={DatePicker}
              name="dateTime"
              fullWidth
              InputProps={{
                startAdornment: (<Adornment pl={2}  text={'Date of Start'} />),
                endAdornment: ( <Adornment pr={2} text={<CalendarTodayIcon></CalendarTodayIcon>}></Adornment>),
              }}
            />
            <br />
            <Field
              component={TextField}
              type="text"
              fullWidth
              name="name"
              InputProps={{
                startAdornment: (<Adornment pl={2}  text={'Input of Name'} />)
              }}
            />
            <br></br>
            <Field
              component={FormPriceText}
              type="text"
              fullWidth
              name="price"
              InputProps={{
                startAdornment: (<Adornment pl={2}  text={'Input of price'} />),
                endAdornment: ( <Adornment pr={2} text={'Rp'}></Adornment>),
              }}
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
    </div>
  );
}
