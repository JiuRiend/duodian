'use strict';

const Service = require('egg').Service;

class personageService extends Service {
    /**
         * 添加个人信息
         */
    async addMessage(value) {
        const search = `select * from allshop where name like '%${value}%'`;
        const result = await this.app.mysql.query(search);
        console.log();
        return {
            result,
        };
    }
}

module.exports = personageService;
