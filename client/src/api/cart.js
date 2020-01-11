import request from '@/utils/request';

export const cartList = () => {
	return request.get('/getCartList');
};
export const addNum = (num, id) => {
	return request.post('/addNum', { num, id });
};
export const search = () => {
	return request.get('/search');
};
export const allshop = () => {
	return request.get('/allshop');
};
export const removeCart = id => {
	return request.post('/removeCart', { id });
};
export const isCheck = (id, isCheck) => {
	return request.post('/isCheck', { id, isCheck });
};
export const filterProductType = type => {
	return request.post('/getProductType', { type });
};
export const productTitle = id => {
	return request.post('/getProductTitle', { id });
};
export const addIsBuy = id => {
	return request.post('/addIsBuy', { id });
};
export const getDetail = id => {
	return request.post('/getDetail', { id });
};
export const getShopData = () => {
	return request.get('/getShopData')
}

export const getShopTypeList = async () => {
	return request.get('/getShopTypeList')
}

export const getProductEvaluate = id => {
	return request.post('/getProductEvaluate', { id });
};

export const getClassifyTitleList = (id) => {
	return request.get('/getClassifyTitleList', {
		params: {
			id
		}
	})
}