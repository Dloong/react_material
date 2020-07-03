import {TEST_DEMO} from "./actionsTypes"
const defaultState = {
    demo: {

    }
}  //默认数据
export default (state = defaultState,action: any)=>{  //就是一个方法函数
    console.log(state,action);
    if (action.type === TEST_DEMO) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.demo = action.value
        return newState
    }

    return state
}