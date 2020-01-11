'use strict';

const Service = require('egg').Service;

class SearchService extends Service {
  /**
  * 搜索信息
  */
  async fincMasage(value) {
    const search = `select * from allshop where name like '%${value}%'`;
    const result = await this.app.mysql.query(search);
    return {
      result,
    };
  }
  /**
   * 查找历史信息
   */
  async findhistory() {
    const search = 'select * from history order by id DESC';
    const history_masage = await this.app.mysql.query(search);
    return {
      history_masage,
    };
  }
  /**
   *添加历史信息
   * @param {*} value
   */
  async addhistory(value) {
    if (value) {
      const insert = `insert into history (name) values ('${value}')`;
      const insert_history = await this.app.mysql.query(insert);
      return {
        insert_history,
      };
    }
  }
  /**
   * 删除历史记录
   */
  async delhistory() {
    const del = 'truncate table history;';
    const del_history = await this.app.mysql.query(del);
    return {
      del_history,
    };
  }
}

module.exports = SearchService;
