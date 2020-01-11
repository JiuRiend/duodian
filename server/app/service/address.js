'use strict';
const { Service } = require('egg');

class address extends Service {
  // 获取城市地址
  async getcity() {
    const result = await this.app.mysql.select('city');
    return result;
  }
  // 筛选地区
  async ScreenRegion(name) {
    const $sql = 'select * from city where name=? ';
    const result = await this.app.mysql.query($sql, [ name ]);
    let result1 = null;

    if (result[0]) {
      const $sql1 = 'select * from area where uid=? ';
      result1 = await this.app.mysql.query($sql1, [ result[0].id ]);

    } else {
      result1 = '没有数据';
    }
    return result1;
  }

  async AddRess(name, CellPhoneNumber, dz, xxdz, qu) {

    const $sql = 'insert into address (name,CellPhoneNumber,dz,xxdz,qu) values (?,?,?,?,?)';
    const result = await this.app.mysql.query($sql, [ name, CellPhoneNumber, dz, xxdz, qu ]);
    return result;
  }
}
module.exports = address;
