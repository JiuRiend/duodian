const { Service } = require('egg');

class BannerService extends Service {
	//添加图片
	async addBanner(filename) {
		const result = await this.app.mysql.insert('banner', {
			banner_name: filename
		});
		return result;
	}
	//获取banner图片列表
	async getBannerList(type) {
		if (type === 'front') {
			const result = await this.app.mysql.select('banner');
			return result;
		} else {
			const $sql = `select * from banner order by id desc`;
			const result = await this.app.mysql.query($sql);
			return result;
		}
	}
	//删除banner图片
	async bannerDelete(id) {
		const result = await this.app.mysql.delete('banner', {
			id
		});
		return result;
	}
	//设置展示banner状态
	async setBannerStatus(id, status) {
		let type;
		if (status === 'true') {
			type = 1;
		} else {
			type = 0;
		}
		const row = { banner_status: type };
		const options = {
			where: {
				id
			}
		};
		const result = await this.app.mysql.update('banner', row, options);
		return result;
	}
}
module.exports = BannerService;
