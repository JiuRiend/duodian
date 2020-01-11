import request from '@/utils/request';
// import axios from 'axios';
// 获取验证码
export function getAuthCode({ phone }) {
    return request.post('/getAuthCode', { phone });
}
// 登录
export function login({ phone, authCode }) {
    return request.post('/login', { phone, authCode });
}