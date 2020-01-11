import axios from 'axios';

//获取banner列表
export const getBannerList = () => {
	return axios.get('/home/getBannerList', {
		params: {
			type: 'back'
		}
	});
};
//删除banner图片
export const bannerDelete = record => {
	const { id, banner_name } = record;
	return axios.get('/home/bannerDelete', {
		params: {
			id,
			name: banner_name
		}
	});
};
//更改展示banner状态
export const setBannerStatus = params => {
	return axios.get('/home/setBannerStatus', {
		params
	});
};
