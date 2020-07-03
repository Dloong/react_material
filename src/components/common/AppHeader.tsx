import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  },
}));

export default function ButtonAppBar(props: any) {
  const classes = useStyles();
    const handleBack = ()=> {
      window.history.go(-1)
    }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleBack}>
            {props.backIcon?? <ArrowBackIosIcon />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <IconButton edge="end"  color="inherit" aria-label="menu">
            {props.endIcon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
