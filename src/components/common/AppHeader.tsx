import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, IconButton, Toolbar, AppBar, Box} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  },
}));
export interface AppHeaderProps {
  backIcon?: string,
  showBack?: boolean,
  title: string,
  endIcon?: string
}


 function ButtonAppBar(props: AppHeaderProps) {
  const classes = useStyles();
    const handleBack = ()=> {
      window.history.go(-1)
    }
    const {title, backIcon, endIcon, showBack} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {
            showBack && <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleBack}>
            {backIcon?? <ArrowBackIosIcon />}
          </IconButton>
          }

          <Box textAlign="center" width="100%">
            <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          </Box>
          <IconButton edge="end"  color="inherit" aria-label="menu">
            {endIcon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.defaultProps ={
  showBack: true
}

export default ButtonAppBar