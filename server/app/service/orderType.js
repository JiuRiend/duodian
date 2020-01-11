/*
 * @Author: GF 
 * @Date: 2019-10-18 20:34:50 
 * @Last Modified by: GF
 * @Last Modified time: 2019-10-18 20:36:37
 */
'use strict';

const Service = require('egg').Service;

class orderTypeService extends Service {
    /**
         * 获取所有订单
         */
    async getAllOrder() {
        const $sql = 'select * from allOrder order by id desc';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待支付
        */
    async getUnpaidOrder() {
        const $sql = 'select * from allOrder where order_type=1 order by id desc';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待发货
        */
    async getDeliverOrder() {
        const $sql = 'select * from allOrder where order_type=2 order by id desc';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待发货
        */
    async getDonDeliverOrder() {
        const $sql = 'select * from allOrder where order_type=3 order by id desc';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取未评价
        */
    async getNotEvalOrder() {
        const $sql = 'select * from allOrder where order_type=4 order by id desc';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 详情
        */
    async orderTypeDetail(id) {
        const $sql = `select * from allOrder where id=${id}`;
        const result = await this.app.mysql.query($sql);
        return result
    }

}

module.exports = orderTypeService;
