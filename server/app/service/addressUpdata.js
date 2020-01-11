'use strict';
const { Service } = require('egg');

class address extends Service {
  async getAddressList() {
    return await this.app.mysql.select('address');
  }
  async delAddressList(obj) {
    const { id } = obj;
    const $sql = 'delete from address where id=?';
    return await this.app.mysql.query($sql, [ id ]);
  }
  async updateAddressList(obj) {
    const {
      name,
      tel,
      province,
      city,
      county,
      addressDetail,
      id,
    } = obj.addressObj;
    const CellPhoneNumber = tel;
    const dz = province === city ? province + county : province + city + county;
    const xxdz = addressDetail;
    const $sql =
      'update address set name=?,CellPhoneNumber=?,dz=?,xxdz=? where id=?';
    return await this.app.mysql.query($sql, [
      name,
      CellPhoneNumber,
      dz,
      xxdz,
      id,
    ]);
  }
}
module.exports = address;
