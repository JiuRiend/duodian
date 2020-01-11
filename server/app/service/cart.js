'use strict';
const { Service } = require('egg');

class cart extends Service {
  async getCartList() {
    const results = await this.app.mysql.select('allshop');
    results.forEach(item => {
      if (item.ischecked === 'true') {
        item.ischecked = true;
      } else if (item.ischecked === 'false') {
        item.ischecked = false;
      }
    });
    return results;
  }
  async addNum(num, id) {
    const $sql = 'update cart set num=? where id=?';
    const result = await this.app.mysql.query($sql, [ num, id ]);
    return result;
  }
  async isCheck(id, isCheck) {
    const row = {
      id,
      check: isCheck,
    };
    const result = await this.app.mysql.update('cart', row);
    return result;
  }
  async removeCart(id) {
    const row = {
      id,
      isbuy: 'false',
    };
    const result = await this.app.mysql.update('allshop', row);
    return result;
  }
  async getProductType(type) {
    const $sql = 'select * from allshop where productType=?';
    const result = await this.app.mysql.query($sql, [ type ]);
    return result;
  }
  async getProductTitle(id) {
    const $sql = 'select * from icon where id=?';
    const result = await this.app.mysql.query($sql, [ id ]);
    return result;
  }
  async addIsBuy(id) {
    const row = {
      id,
      isbuy: 'true',
    };
    const result = await this.app.mysql.update('allshop', row);
    return result;
  }
  async getDetail(id) {
    const results = await this.app.mysql.select('allshop', {
      where: { id },
    });
    return results[0];
  }
  async getProductEvaluate(id) {
    const results = await this.app.mysql.select('productevaluate', {
      where: { product_id:id },
    });
    return results;
  }
}
module.exports = cart;
