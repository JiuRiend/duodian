import request from '@/utils/request';
/**
 * 模糊搜索
*/
export function search(obj) {
    return request.post('/find/masage', obj);
}
/**
 * 添加历史记录
*/
export function change_history(obj) {
    return request.post('/add/history', obj);
}
/**
 * 删除历史记录
*/
export function del_history() {
    return request.get('/del/history');
}
/**
 * 查找历史记录
*/
export function find_history(obj) {
    return request.get('/find/history', obj);
}
/**
 * 查找搜索列表
*/
export function find_search(obj) {
    return request.get('/find/history', obj);
}