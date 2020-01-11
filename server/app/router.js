'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 获取验证码
  router.post('/getAuthCode', controller.login.getAuthCode);
  // 登录
  router.post('/login', controller.login.login);
  /**
	 * 获取轮播图信息
	 */
  router.get('/get/swiper', controller.home.getswiper);
  /**
	 * 获取icon表信息
	 */
  router.post('/getAuthCode', controller.login.getAuthCode);
  /**
	 *  登录
	 */
  router.post('/login', controller.login.login);
  /**
	 * 获取轮播图信息
	 */
  router.get('/get/swiper', controller.home.getswiper);
  /**
	 * 获取icon表信息
	 */
  router.get('/get/icon', controller.home.geticon);
  /**
	 * 获取type类型
	 */
  router.post('/get/type', controller.home.gettype);
  /**
	 * 搜索商品信息
	 */
  router.post('/find/masage', controller.search.fincMasage);
  /**
	 * 查找历史记录
	 */
  router.get('/find/history', controller.search.findhistory);
  /**
	 * 添加历史记录
	 */
  router.post('/add/history', controller.search.addhistory);
  /**
	 * 删除历史记录
	 */
  router.get('/del/history', controller.search.delhistory);

  router.get('/search', controller.classification.search);
  router.get('/allshop', controller.classification.allshop);
  // 获取商品品种种列表
  router.get('/getShopTypeList', controller.classification.getShopTypeList);
  // 获取筛选头部列表 getClassifyTitleList
  router.get(
    '/getClassifyTitleList',
    controller.classification.getClassifyTitleList
  );
  // 获取购物车列表
  router.get('/getCartList', controller.cart.cartList);
  // 增加数量
  router.post('/addNum', controller.cart.addNum);
  // 添加banner图片
  router.post('/home/addBanner', controller.banner.addBanner);
  // 获取banner图片列表
  router.get('/home/getBannerList', controller.banner.getBannerList);
  // 删除banner图片
  router.get('/home/bannerDelete', controller.banner.bannerDelete);
  // 设置展示banner状态
  router.get('/home/setBannerStatus', controller.banner.setBannerStatus);
  // 添加个人信息
  router.post('/addMessage', controller.personage.addMessage);
  // 更改状态
  router.post('/isCheck', controller.cart.isCheck);
  // 筛选商品类型
  router.post('/getProductType', controller.cart.getProductType);
  // 商品类型页获取页头标题和banner图
  router.post('/getProductTitle', controller.cart.getProductTitle);
  // 加入购物车
  router.post('/addIsBuy', controller.cart.addIsBuy);
  // 获取商品详情
  router.post('/getDetail', controller.cart.getDetail);
  // 删除商品
  router.post('/removeCart', controller.cart.removeCart);
  // 获取首页tab切换区商品列表
  router.get('/getShopData', controller.home.getShopData);
  // 获取所有的订单
  router.get('/getAllOrder', controller.orderType.getAllOrder);
  // 获取待支付订单
  router.get('/getUnpaidOrder', controller.orderType.getUnpaidOrder);
  // 获取待待发货
  router.get('/getDeliverOrder', controller.orderType.getDeliverOrder);
  // 获取正在配送
  router.get('/getDonDeliverOrder', controller.orderType.getDonDeliverOrder);
  // 获取正在配送
  router.get('/getNotEvalOrder', controller.orderType.getNotEvalOrder);
  // 添加订单
  router.post('/add/order', controller.orderType.addOrder);
  // tab点击加载更多
  router.get('/loadMore', controller.home.loadMore);
  // 获取城市地址
  router.get('/getcity', controller.address.getcity);
  // 筛选地区
  router.post('/ScreenRegion', controller.address.ScreenRegion);
  // 新增地址
  router.post('/AddRess', controller.address.AddRess);

  // 获取地址列表
  router.get('/getAddressList', controller.addressUpdata.getAddressList);
  // 删除地址
  router.post('/delAddressList', controller.addressUpdata.delAddressList);
  // 修改地址
  router.post('/updateAddressList', controller.addressUpdata.updateAddressList);
  // 订单状态详情 id
  router.post('/orderTypeDetail', controller.orderType.orderTypeDetail);
  // 获取商品评价信息
  router.post('/getProductEvaluate', controller.cart.getProductEvaluate);
};
