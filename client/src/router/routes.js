export default [
	{
		name: '学校超市',
		path: '/list',
		component: () => import('views/list'),
		children: [
			{
				name: '首页',
				path: '/list/home',
				component: () => import('views/list/home')
			},
			{
				name: '搜索商品',
				path: '/list/search',
				component: () => import('views/list/home/search')
			},
			{
				name: '分类列表',
				path: '/list/list/:id',
				component: () => import('views/list/list')
			},
			{
				name: '分类',
				path: '/list/classify',
				component: () => import('views/list/classify')
			},
			{
				name: '购物车',
				path: '/list/shop',
				meta: { authorization: true },
				component: () => import('views/list/shop')
			},
			{
				name: '我的',
				path: '/list/my',
				component: () => import('views/list/my')
			},
			{
				name: '订单状态',
				path: '/list/orderType/:id',
				meta: { authorization: true },
				component: () => import('views/list/orderType')
			},
			{
				name: '商品详情',
				path: '/list/detail/:id',
				component: () => import('views/list/productDetail')
			},
			{
				name: '分类详情',
				path: '/list/classify/detail/:id',
				component: () => import('views/list/classifyDetail')
			},
			{
				path: '/list',
				redirect: '/list/home'
			}
		]
	},
	{
		name: '搜索',
		path: '/search',
		component: () => import('views/search')
	},
	{
		name: '搜索列表',
		path: '/searchlist/:id',
		component: () => import('views/searchlist')
	},
	{
		name: '登陆',
		path: '/login',
		component: () => import('views/login')
	},

	{
		name: '登陆',
		path: '/login',
		component: () => import('views/login')
	},

	{
		name: '定位',
		path: '/location',
		component: () => import('views/location')
	},

	{
		name: 'address',
		path: '/address',
		meta: { authorization: true },
		component: () =>
			import('views/address')
	},
	{
		name: 'findAddress',
		path: '/findAddress',
		component: () =>
			import('views/address/FindAddress')
	},
	{
		name: '订单详情',
		path: '/orderDetail',
		meta: { authorization: true },
		component: () =>
			import('views/pay/orderDetail')
	},
	{
		name: '确认订单',
		path: '/confirmOrder',
		meta: { authorization: true },
		component: () =>
			import('views/confirmOrder')
	},

	{
		name: '订单状态',
		path: '/list/orderTypeDetail/:id',
		component: () => import('views/list/orderTypeDetail')
	},
	{
		name: '地址列表',
		path: '/addressPage',
		meta: { authorization: true },
		component: () => import('views/addressPage')
	},
	{
		name: '新地址列表',
		path: '/newAddressPage',
		meta: { authorization: true },
		component: () => import('views/newAddressPage')
	},
	{
		name: 'editAddress',
		path: '/editAddress',
		meta: { authorization: true },
		component: () => import('views/editAddress')
	},
	{
		name: '支付',
		path: '/payment',
		meta: { authorization: true },
		component: () => import('views/pay/payment')
	},
	{
		name: '联系客服页面',
		path: '/list/customerService',
		component: () => import('views/list/customerService')
	},
	{
		name: '支付结果',
		path: '/payend',
		meta: { authorization: true },
		component: () => import('views/pay/payend')
	},
	{
		name: '优惠卷',
		path: '/coupon',
		meta: { authorization: true },
		component: () => import('views/Coupon')
	},
	{
		name: '资质规则',
		path: '/qualifications',
		meta: { authorization: true },
		component: () => import('views/Qualifications')
	},
	{
		name: '图标',
		path: '/quarterEcharts',
		component: () => import('views/echarts')
	},
	{
		path: '/',
		redirect: '/location'
	}
]
