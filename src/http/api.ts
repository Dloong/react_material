import http from './index';
export interface Itest {
    pageNo:Number,
    rowNo:Number
}
export function test(params:Itest) {
    return http({
        url:`/merchant/menuList?pageNo=${params.pageNo}&rowNo=${params.rowNo}`,
        method: 'get'
    })
}