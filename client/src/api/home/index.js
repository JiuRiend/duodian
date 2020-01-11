import request from '@/utils/request';
/**
 * 获取swiper信息
*/
export function getswiper() {
    return request.get('/get/swiper');
}
/**
 * 获取icon表信息
*/
export function geticon() {
    return request.get('/get/icon');
}
/**
 * 获取type信息
*/
export function gettype(obj) {
    return request.post('/get/type', obj);
}
// 获取ted切换列表
export const getShopData = () => {
    return request.get('/getShopData')
}
//加载更多
export const loadMore = (type, length) => {
    return request.get('/loadMore', { params: { type, length } })
}

