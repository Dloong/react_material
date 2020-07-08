import React, {useEffect, useState} from 'react'
import AppHeader from "../components/common/AppHeader"
import PoList from '../components/poList'
import {Box} from "@material-ui/core"
import {test} from "../http/api"



export default function PoListPage () {
    const [list, setList] = useState({data:{}, pageNo: 1, rowNo: 1, total: 10})
    async function testApi(){
        try {
          let result = await test({pageNo:1 ,rowNo: 6})
          setList(result.data)
        }catch(e) {
          console.log(e);
        }
      }
    useEffect(() => {
        testApi();
    },[])
    return  (
        <Box>
            <AppHeader  title={'Po List'} />
            <PoList data={list.data}></PoList>
        </Box>
    )
}

