import React from "react";
import { Button, ButtonProps, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer_button: {
    borderRadius: 50,
  },
}));

export default function FooterButton(props: ButtonProps) {
  const classes = useStyles();
  const { children} = props;
  return (
      <Box pl={2} pr={2}>
        <Button {...props} className={classes.footer_button}>
          {children}
        </Button>
      </Box>
  );
}
