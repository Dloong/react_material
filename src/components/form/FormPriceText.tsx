import React from 'react'
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField } from 'formik-material-ui';
import {formatMoney} from "../../utils"

export default function AppPricetext(props: any) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    event => {
      const { value } = event.target;
      const reg = /[a-zA-Z]+/
      if(reg.test(value)) {
          return
      }
      setFieldValue(name, value ? formatMoney(value) : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}