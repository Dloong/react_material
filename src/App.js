import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import AppHeader from "./components/common/AppHeader"
import {test} from "./http/api"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
async function testApi(){
  try {
    let result = await test({pageNo:1 ,rowNo: 6})
    console.log(result)
  }catch(e) {
    console.log(e);

  }
}

export default function App() {
  useEffect(() => {
    testApi()
  })
  return (
    <div>
      <AppHeader title="Back"></AppHeader>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </div>

  );
}