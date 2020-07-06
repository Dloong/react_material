import React from 'react'
import {Box, BoxProps, Typography} from '@material-ui/core'
import empty from "../../assets/images/empty.png"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '80vw',
      margin: '0 auto'
    },

  }));

function PageEmpty(prop: BoxProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="center">
                <img src={empty} alt=""/>
            </Box>
            <Box display="flex" mt={4}  color="text.disabled"  justifyContent="center">
                <Typography variant="h5" align="center">Looks like you have no PO with us.</Typography>
            </Box>
            <Box display="flex" mt={2} color="text.disabled" justifyContent="center">
                <Typography variant="inherit" align="center">Awesome! Quickly publish and share your PO.  Your PO will appear here.</Typography>
            </Box>
        </div>

    )
}

export default PageEmpty