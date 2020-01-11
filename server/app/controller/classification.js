'use strict';
const Controller = require('egg').Controller;
class Search extends Controller {
  async search() {
    const { ctx } = this;
    const search = await ctx.service.classification.search();
    if (search.length) {
      ctx.body = {
        code: 1,
        data: search,
      };
    } else {
      ctx.body = {
        code: 0,
        massage: '请求失败',
      };
    }
  }
  async allshop() {
    const { ctx } = this;
    const allshop = await ctx.service.classification.allshop();
    if (allshop.length) {
      ctx.body = {
        code: 1,
        data: allshop,
      };
    } else {
      ctx.body = {
        code: 0,
        massage: '请求失败',
      };
    }
  }

  async getShopTypeList() {
    const { ctx } = this;
    const result = await ctx.service.classification.getShopTypeList();
    ctx.body = {
      code: 1,
      result,
    };
  }

  async getClassifyTitleList() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    const result = await ctx.service.classification.getClassifyTitleList(id);
    ctx.body = {
      code: 1,
      result,
    };
  }
}
module.exports = Search;
