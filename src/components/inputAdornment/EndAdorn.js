import React from 'react';
import {Box, InputAdornment } from "@material-ui/core";

export default function EndAdorn (props) {

    return (
        <Box pr={2}>
            <InputAdornment position="end">
                {props.text}
            </InputAdornment>
        </Box>
    )
}