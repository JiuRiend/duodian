'use strict';
const md5 = require('md5');
const crypto = require('crypto');

function key() {
  return 'sun';
}

function sha256(str) {
  return crypto
    .createHmac('sha256', str)
    .update(key())
    .digest('hex');
}

function creatToken(id) {
  const token = JSON.stringify({
    id,
    time: new Date() * 1,
  });
  return md5(token);
}

function creatAuthCode() {
  let str = '';
  for (let i = 0; i < 6; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}
module.exports = { creatToken, sha256, creatAuthCode };
