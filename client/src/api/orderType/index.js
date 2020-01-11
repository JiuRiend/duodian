import request from 'utils/request';

export function getAllOrder() {
    return request.get('/getAllOrder');
}
export function getUnpaidOrder() {
    return request.get('/getUnpaidOrder');
}
export function getDeliverOrder() {
    return request.get('/getDeliverOrder');
}
export function getDonDeliverOrder() {
    return request.get('/getDonDeliverOrder');
}
export function getNotEvalOrder() {
    return request.get('/getNotEvalOrder');
}
export function getDiscount() {
    return request.get('/getDiscount');
}
export function orderTypeDetail(id) {
    return request.post('/orderTypeDetail', { id });
}

