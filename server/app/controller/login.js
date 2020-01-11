'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 获取验证码
  async getAuthCode() {
    const { phone } = this.ctx.request.body;
    let authCode = this.ctx.helper.creatAuthCode();

    const email = `${phone}@qq.com`; // 接收者的邮箱
    const subject = '登录验证码';
    const text = '验证码';
    const html = `<div>验证码: <b>${authCode}</b> 。<br/>您正在登录校园超市，该验证码仅用于身份验证，请勿泄露给他人使用</div>`;

    const has_send = await this.service.login.sendMail(
      email,
      subject,
      text,
      html
    );

    if (has_send) {
      const result = await this.ctx.service.login.verifyPhone(phone);
      authCode = this.ctx.helper.sha256(authCode);
      if (result.length === 0) {
        await this.ctx.service.login.registery(phone, authCode);
      } else {
        const { id } = result[0];
        await this.ctx.service.login.saveAuthCode(authCode, id);
      }
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: '发送成功',
      };
      return;
    }
    this.ctx.status = 401;
    this.ctx.body = {
      code: 0,
      msg: '发送失败',
    };
  }

  // 登录
  async login() {
    const { phone, authCode } = this.ctx.request.body;
    const result = await this.ctx.service.login.login(
      phone,
      this.ctx.helper.sha256(authCode)
    );
    if (result.length) {
      const { id } = result[0];
      const token = this.ctx.helper.creatToken(id);
      await this.ctx.service.login.saveToken(token, id);
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        uid: id,
        token,
        msg: '登录成功!',
      };
    } else {
      this.ctx.status = 401;
      this.ctx.body = {
        code: 0,
        msg: '验证码错误!',
      };
    }
  }
}

module.exports = UserController;
