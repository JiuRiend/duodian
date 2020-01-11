'use strict';
const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');

class BannerController extends Controller {
  // 添加banner图片
  async addBanner() {
    const file = this.ctx.request.files[0];
    console.log(this.ctx, 'ctx');
    const fileData = fs.readFileSync(file.filepath);
    const bannerPath = path.join(
      process.cwd(),
      'app/public/img/banner',
      file.filename
    );
    const result = await this.ctx.service.banner.addBanner(file.filename);
    if (result) {
      fs.writeFileSync(bannerPath, fileData);
      this.ctx.body = {
        code: 1,
        msg: '添加成功',
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: '添加失败',
      };
    }
  }
  // 获取banner图片列表
  async getBannerList() {
    const { type } = this.ctx.request.query;
    const result = await this.ctx.service.banner.getBannerList(type);
    this.ctx.body = result;
  }
  // 删除banner图片
  async bannerDelete() {
    const { id, name } = this.ctx.request.query;
    const filePath = path.join(
      process.cwd(),
      'app/public/img/banner',
      name
    );
    const result = await this.ctx.service.banner.bannerDelete(id);
    if (result) {
      fs.unlinkSync(filePath, name);
      this.ctx.body = {
        code: 1,
        msg: '已删除',
      };
    }
  }
  // 设置展示banner的状态
  async setBannerStatus() {
    const { id, status } = this.ctx.request.query;
    const result = await this.ctx.service.banner.setBannerStatus(
      id,
      status
    );
    this.ctx.body = result;
  }
}
module.exports = BannerController;
