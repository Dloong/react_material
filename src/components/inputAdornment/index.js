import React from 'react';
import {Box, InputAdornment } from "@material-ui/core";

export default function EndAdorn (props) {

    return (
        <Box pr={props.pr} pl={props.pl}>
            <InputAdornment position={props.position}>
                {props.text}
            </InputAdornment>
        </Box>
    )
}