<template>
	<div class="confirmOrder">
		<Header :title="title" :isShow="isShow" />
		<div class="address" @click="goAddressPage">
			<div class="address-left">
				<h3 v-text="list[0].address"></h3>
				<p>
					<span class="address-left-name" v-text="list[0].name"></span>
					<span v-text="list[0].tel"></span>
				</p>
			</div>
			<div>
				<van-icon class="arrow" name="arrow" />
			</div>
		</div>
		<!-- 商品信息卡片 -->
		<van-card
			num="1"
			tag="限时折扣"
			price="99"
			origin-price="129"
			title="休闲时装"
			thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
		/>
		<!-- 优惠券单元格 -->
		<van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
		<!-- 优惠券列表 -->
		<van-popup v-model="showList" position="bottom">
			<van-coupon-list
				:coupons="coupons"
				:chosen-coupon="chosenCoupon"
				:disabled-coupons="disabledCoupons"
				@change="onChange"
				@exchange="onExchange"
			/>
		</van-popup>
		<!-- 买家留言 -->
		<van-cell-group>
			<van-field
				v-model="message"
				label="买家留言"
				type="textarea"
				placeholder="留言建议提前协商（50字以内）"
				rows="1"
				autosize
			/>
		</van-cell-group>
		<!-- 提交订单 -->
		<van-submit-bar :price="9900" button-text="提交订单" @submit="onSubmit" />
	</div>
</template>

<script>
import Header from "@/components/layout/header";
import {
	Icon,
	Card,
	CouponCell,
	Popup,
	CouponList,
	Field,
	cellGroup,
	SubmitBar
} from "vant";

const coupon = {
	available: 1,
	condition: "无使用门槛\n最多优惠12元",
	reason: "",
	value: 150,
	name: "优惠券名称",
	startAt: 1489104000,
	endAt: 1514592000,
	valueDesc: "1.5",
	unitDesc: "元"
};

export default {
	data() {
		return {
			list: [
				{
					id: 0,
					name: "张三",
					tel: "13000000000",
					address: "八维研修学院(第二校区)宿舍楼2号楼"
				}
			],
			title: "确认订单",
			isShow: true,
			showList: false,
			chosenCoupon: -1,
			coupons: [coupon],
			disabledCoupons: [coupon],
			message: ""
		};
	},
	components: {
		Header,
		vanIcon: Icon,
		vanCard: Card,
		vanCouponCell: CouponCell,
		vanPopup: Popup,
		vanCouponList: CouponList,
		vanField: Field,
		vanCellGroup: cellGroup,
		vanSubmitBar: SubmitBar
	},
	methods: {
		goAddressPage() {
			this.$router.push("/addressPage");
		},
		onChange(index) {
			this.showList = false;
			this.chosenCoupon = index;
		},
		onExchange() {
			this.coupons.push(coupon);
		},
		onSubmit() {
			// console.log("跳转支付页面");
		}
	}
};
</script>

<style lang='scss'>
.address {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.15rem;
	h3 {
		padding: 5px 0;
	}
	.address-left {
		width: 95%;
	}
	.address-left-name {
		margin-right: 0.1rem;
	}
	.arrow {
		font-size: 0.16rem;
		color: #aaa;
	}
}
</style>