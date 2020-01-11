'use strict';
const Controller = require('egg').Controller;

class cart extends Controller {
  async cartList(ctx) {
    const result = await ctx.service.cart.getCartList();
    ctx.body = {
      code: 1,
      result,
    };
  }
  async addNum(ctx) {
    const { num, id } = ctx.request.body;
    await ctx.service.cart.addNum(num, id);
    ctx.body = {
      code: 1,
    };
  }
  async isCheck(ctx) {
    const { id, isCheck } = ctx.request.body;
    await ctx.service.cart.isCheck(id, isCheck);
    ctx.body = {
      code: 1,
    };
  }
  async getProductType(ctx) {
    const { type } = ctx.request.body;
    const result = await ctx.service.cart.getProductType(type);
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '获取商品类型失败',
      };
    }
  }
  async getProductTitle(ctx) {
    const { id } = ctx.request.body;
    const result = await ctx.service.cart.getProductTitle(id);
    if (result.length) {
      ctx.body = {
        code: 1,
        result: result[0],
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '获取数据失败',
      };
    }
  }
  async addIsBuy(ctx) {
    const { id } = ctx.request.body;
    await ctx.service.cart.addIsBuy(id);
    ctx.body = {
      code: 1,
    };
  }
  async removeCart(ctx) {
    const { id } = ctx.request.body;
    await ctx.service.cart.removeCart(id);
    ctx.body = {
      code: 1,
    };
  }
  async getDetail(ctx) {
    const { id } = ctx.request.body;
    const result = await ctx.service.cart.getDetail(id);
    ctx.body = {
      code: 1,
      data: result,
    };
  }
  async getProductEvaluate(ctx) {
    const { id } = ctx.request.body;
    const result = await ctx.service.cart.getProductEvaluate(id);
    if(result.length){
      ctx.body = {
        code: 1,
        data: result,
      };
    }else{
      ctx.body = {
        code: 0,
        data: "暂无数据",
      };
    }
   
  }
}
module.exports = cart;
