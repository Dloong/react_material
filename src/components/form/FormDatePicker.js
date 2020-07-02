import React from 'react'
import { fieldToTextField } from 'formik-material-ui';
import { DatePicker } from "@material-ui/pickers";

export default function AppPricetext(props) {
//   const {
//     form: { setFieldValue },
//     field: { name },
//   } = props;
//   const onChange = React.useCallback(
//     event => {
//       const { value } = event.target;
//       const reg = /[a-zA-Z]+/
//       if(reg.test(value)) {
//           return
//       }
//       setFieldValue(name, value ? value : '')
//     },
//     [setFieldValue, name]
//   );
  return <DatePicker {...fieldToTextField(props)}  />;
}