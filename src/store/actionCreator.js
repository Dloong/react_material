import {TEST_DEMO} from "./actionsTypes"
import {test} from "../http/api"

export const testRedux = (value) => ({
    type: TEST_DEMO,
    value
})

export const testThunk =() => {
    return (dispath) => {
        test({pageNo:1 ,rowNo: 6}).then(({data}) => {
            console.log(data);
            const action = testRedux(data)
            dispath(action)
        })
    }
}
