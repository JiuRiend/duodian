'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  /**
  * 搜索信息
  */
  async fincMasage() {
    const { value } = this.ctx.request.body;
    const data = await this.ctx.service.search.fincMasage(value);
    this.ctx.body = {
      data,
    };
  }
  /**
   * 查找历史信息
   */
  async findhistory() {
    const history = await this.ctx.service.search.findhistory();
    this.ctx.body = {
      history,
    };
  }
  /**
  * 添加历史信息
  */
  async addhistory() {
    const { value } = this.ctx.request.body;
    const history = await this.ctx.service.search.addhistory(value);
    if (history) {
      this.ctx.body = 200;
    } else {
      this.ctx.body = 500;
    }
  }
  /** 删除历史记录
   *
  */
  async delhistory() {
    const delhistory = await this.ctx.service.search.delhistory();
    this.ctx.body = {
      delhistory,
    };
  }
}

module.exports = SearchController;
