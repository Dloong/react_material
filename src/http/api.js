import http from './index';

export function test(params) {
    return http({
        url:`/merchant/menuList?pageNo=${params.pageNo}&rowNo=${params.rowNo}`,
        method: 'get'
    })
}