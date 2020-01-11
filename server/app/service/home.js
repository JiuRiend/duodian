'use strict';

const { Service } = require('egg');

class HomeService extends Service {
    async getShopData() {
        const results = await this.app.mysql.select("allshop", {
            where: { homeType: 1 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        const results1 = await this.app.mysql.select("allshop", {
            where: { homeType: 2 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        const results2 = await this.app.mysql.select("allshop", {
            where: { homeType: 3 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        const results3 = await this.app.mysql.select("allshop", {
            where: { homeType: 4 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        const results4 = await this.app.mysql.select("allshop", {
            where: { recommendProduct: 1 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        const results5 = await this.app.mysql.select("allshop", {
            where: { recommendProduct: 2 }, // WHERE 条件
            limit: 3, // 返回数据量
            offset: 0 // 数据偏移量
        });
        return {
            friut: results,
            vegetables: results1,
            meat: results2,
            snacks: results3,
            new: results4,
            hot: results5
        };
    }
    //加载更多
    async loadMore(type, length) {
      switch (type) {
            case "0":
             return  await this.app.mysql.select("allshop", {
                    where: { recommendProduct: 1 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            case "1":
                    return   await this.app.mysql.select("allshop", {
                    where: { recommendProduct: 2 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            case "2":
                    return  await this.app.mysql.select("allshop", {
                    where: { homeType: 1 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            case "3":
                    return   await this.app.mysql.select("allshop", {
                    where: { homeType: 2 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            case "4":
                    return  await this.app.mysql.select("allshop", {
                    where: { homeType: 3 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            case "5":
                    return   await this.app.mysql.select("allshop", {
                    where: { homeType: 4 }, // WHERE 条件
                    limit: 5, // 返回数据量
                    offset: length // 数据偏移量
                });
            default:
                break;
        }
    }
    /**
     * 获取轮播图信息
     */
    async getswiper() {
        const find = `select * from swiper `;
        const swiper_data = await this.app.mysql.query(find);
        return {
            swiper_data
        };
    }
    /**
     * 获取icon表信息
     */
    async geticon() {
        const find = `select * from icon `;
        const icon_data = await this.app.mysql.query(find);
        return {
            icon_data
        };
    }
    /**
     * 类型
     */
    async gettype(type) {
        const find = `select * from allshop where hottype=${type}`;
        const type_data = await this.app.mysql.query(find);
        return {
            type_data
        };
    }
    async allshop() {
        const results = await this.app.mysql.select("allshop");
        return results;
    }
}

module.exports = HomeService;
