import React, { useEffect } from 'react'
import {Container, Box, Typography, Link} from '@material-ui/core';
import AppHeader from "../components/common/AppHeader"
import {test} from "../http/api"

async function testApi(){
  try {
    let result = await test({pageNo:1 ,rowNo: 6})
    console.log(result)
  }catch(e) {
    console.log(e);

  }
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">

        <Link color="inherit" href="/test">
          点击跳转
        </Link>{' '}

      </Typography>
    );
  }
export default function Home() {
    useEffect(() => {
        testApi()
    })
    return (
        <div>
        <AppHeader title="Back"></AppHeader>
        <Container maxWidth="sm">
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              这是demo的Home page
            </Typography>

            <Copyright />
        </Box>
        </Container>
        </div>
    )
}