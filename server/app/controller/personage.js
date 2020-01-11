'use strict';
const Controller = require('egg').Controller;

class personageController extends Controller {
    async addMessage() {
        // const {  } = this.ctx.request.query
        const result = await ctx.service.personage.addMessage();
        ctx.body = {
            code: 1,
            result,
        };
    }
}
module.exports = personageController;
