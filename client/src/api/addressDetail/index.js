/*
 * @Author: 王银虎 
 * @Date: 2019-10-14 11:54:38 
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-10-17 20:48:29
 */

import request from '@/utils/request';

//获取地址
export const ScreenRegion = (name) => {
    return request.post('/ScreenRegion', { name: name });
}

//筛选地区
export const getcity = () => {
    return request.get('/getcity');
}
//新增地址
export const AddRess = (lXr, Sjh, cart, Xxdz, Dz) => {
    return request.post('/AddRess', { name: lXr, CellPhoneNumber: Sjh, dz: cart, xxdz: Xxdz, qu: Dz });
}

