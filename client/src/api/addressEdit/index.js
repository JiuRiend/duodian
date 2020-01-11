import request from '@/utils/request'

// 获取地址列表
export function getAddressList() {
    return request.get('/getAddressList')
}

// 删除地址
export function delAddressList(id) {
    return request.post('/delAddressList', { id })
}

// 修改地址
export function updateAddressList(addressObj) {
    return request.post('/updateAddressList', { addressObj })
}
