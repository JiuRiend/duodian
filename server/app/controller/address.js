'use strict';
const Controller = require('egg').Controller;

class address extends Controller {
  // //获取城市地址
  async getcity() {
    const { ctx } = this;
    const result = await this.ctx.service.address.getcity();
    if (result) {
      ctx.body = {
        code: 1,
        data: result,
      };
    } else {
      ctx.body = {
        code: 0,
        error: '没有数据',
      };
    }
  }

  // 筛选地区
  async ScreenRegion() {
    const { name } = this.ctx.request.body;
    const result = await this.ctx.service.address.ScreenRegion(name);
    if (result) {
      this.ctx.body = {
        code: 1,
        data: result,
      };
    } else {
      this.ctx.body = {
        code: 0,
        error: '没有数据',
      };
    }


  }
  // 新增地址
  async AddRess() {
    const { name, CellPhoneNumber, dz, xxdz, qu } = this.ctx.request.body;
    const result = await this.ctx.service.address.AddRess(name, CellPhoneNumber, dz, xxdz, qu);
    if (result.affectedRows) {
      this.ctx.body = {
        code: 1,
        data: '添加成功',
      };
    } else {
      this.ctx.body = {
        code: 0,
        data: '添加失败',
      };
    }


  }
}
module.exports = address;
