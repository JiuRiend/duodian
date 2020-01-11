/*
 * @Author: GF 
 * @Date: 2019-10-18 20:34:42 
 * @Last Modified by: GF
 * @Last Modified time: 2019-10-18 20:45:53
 */
'use strict';
const Controller = require('egg').Controller;

class orderTypeController extends Controller {
    async getAllOrder() {
        const result = await this.ctx.service.orderType.getAllOrder();
        this.ctx.body = {
            code: 1,
            result,
        };
    }
    async getUnpaidOrder() {
        const result = await this.ctx.service.orderType.getUnpaidOrder();
        this.ctx.body = {
            code: 1,
            result,
        };
    }
    async getDeliverOrder() {
        const result = await this.ctx.service.orderType.getDeliverOrder();
        this.ctx.body = {
            code: 1,
            result,
        };
    }
    async getDonDeliverOrder() {
        const result = await this.ctx.service.orderType.getDonDeliverOrder();
        this.ctx.body = {
            code: 1,
            result,
        };
    }
    async getNotEvalOrder() {
        const result = await this.ctx.service.orderType.getNotEvalOrder();
        this.ctx.body = {
            code: 1,
            result,
        };
    }
    async orderTypeDetail() {
        const { id } = this.ctx.request.body
        const result = await this.ctx.service.orderType.orderTypeDetail(id);
        this.ctx.body = {
            code: 1,
            result,
        };
    }

    /**
     * 徐彪的一个接口，不要删
     */
    async addOrder() {
        const {
            order_name,
            order_detail,
            order_type,
            order_price,
            order_shop,
            order_size,
            order_count,
            order_list
        } = this.ctx.request.body;
        const result = await this.app.mysql.insert('allorder', {
            order_name,
            order_detail,
            order_type,
            order_price,
            order_shop,
            order_size,
            order_count,
            order_list
        });
        this.ctx.body = {
            code: 1,
            msg: "ok",
        };
    }

}
module.exports = orderTypeController;
