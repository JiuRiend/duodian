'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  // tab切换区数据列表
  async getShopData() {
    const { ctx } = this;
    const result = await ctx.service.home.getShopData();
    ctx.body = {
      code:1,
      data:result
    };
  }
  //tab加载更多数据
 async loadMore(){
  const { ctx } = this;
  const {type,length} =ctx.query
  const result = await ctx.service.home.loadMore(type,length*1);
  ctx.body = {
    code:1,
    data:result
  };
 }
  /**
   * 获取轮播播信息
   */
  async getswiper() {
    const { ctx } = this;
    const result = await this.ctx.service.home.getswiper();
    ctx.body = {
      result,
    };
  }
  /**
   * 获取icon表的信息
   */
  async geticon() {
    const { ctx } = this;
    const result = await this.ctx.service.home.geticon();
    ctx.body = {
      result,
    };
  }
  /**
   * 类型
   */
  async gettype() {
    const { ctx } = this;
    const { value } = this.ctx.request.body;
    const result = await this.ctx.service.home.gettype(value);
    ctx.body = {
      result,
    };
  }

}

module.exports = HomeController;
