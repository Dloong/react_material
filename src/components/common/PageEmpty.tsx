import React from 'react'
import {Box, BoxProps, Typography} from '@material-ui/core'
import empty from "../../assets/images/empty.png"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '80vw',
    },

  }));

function PageEmpty(prop: BoxProps) {
    const classes = useStyles();
    return (
        <Box className={classes.root} ml={'auto'} mr={'auto'} mt={8}>
            <Box display="flex" justifyContent="center">
                <img src={empty} alt=""/>
            </Box>
            <Box display="flex" mt={4}  color="text.disabled"  justifyContent="center">
                <Typography variant="h5" align="center">Looks like you have no PO with us.</Typography>
            </Box>
            <Box display="flex" mt={2} color="text.disabled" justifyContent="center">
                <Typography variant="inherit" align="center">Awesome! Quickly publish and share your PO.  Your PO will appear here.</Typography>
            </Box>
        </Box>

    )
}

export default PageEmpty