<template>
	<div class="addressPage">
		<Header :title="title" :isShow="isShow" class="addressPage-header" />
		<!-- 地址列表 -->
		<div class="addressPage-main">
			<div class="addressPage-con" v-for="el in list" :key="el.id">
				<div class="addressPage-left" @click="onSelect(el)">
					<p class="addressPage-left-title">
						<span class="addressPage-left-title-name" v-text="el.name"></span>
						<span v-text="el.tel"></span>
					</p>
					<p class="addressPage-left-des" v-text="el.address"></p>
				</div>
				<div class="addressPage-right" @click="onEdit(el)">
					<van-icon name="edit" size="16" />
				</div>
			</div>
		</div>
		<div class="addressPage-footer" @click="onAdd">
			<span>新增地址</span>
		</div>
	</div>
</template>

<script>
import Header from "@/components/layout/header";
import { Icon } from "vant";
import { getAddressList } from "@/api/addressEdit";

export default {
	data() {
		return {
			title: "地址列表",
			isShow: true,
			list: [
				{
					id: "1",
					name: "张三",
					tel: "13000000000",
					address: "八维研修学院(第二校区)宿舍楼2号楼"
				},
				{
					id: "2",
					name: "李四",
					tel: "1310000000",
					address: "八维研修学院(第二校区)宿舍楼3号楼"
				}
			]
		};
	},
	components: {
		Header,
		vanIcon: Icon
	},
	created() {
		getAddressList().then(res => {
			if (res.code === 1) {
				this.list = res.result.map(item => {
					item.tel = item.CellPhoneNumber;
					item.address = item.dz + item.xxdz;
					return item;
				});
			}
		});
	},
	methods: {
		onAdd() {
			this.$router.push("/address");
		},
		onEdit(item) {
			let addressItem = {
				id: item.id,
				name: item.name,
				tel: item.tel,
				address: item.address
			};
			this.$router.push({
				name: "editAddress",
				params: { addressItem }
			});
		},
		onSelect(item) {
			let addressItem = {
				id: item.id,
				name: item.name,
				tel: item.tel,
				address: item.address
			};
			window.localStorage.setItem("addressInfo", JSON.stringify(addressItem));
			this.$router.push("/orderDetail");
		}
	}
};
</script>

<style lang='scss'>
.addressPage {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.addressPage-main {
	height: 100%;
	flex: 1;
	overflow: auto;
	padding-left: 0.16rem;
}
.addressPage-con {
	height: 0.72rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.16rem 0.16rem 0.16rem 0;
	border-bottom: 1px solid #ebedf0;
}
.addressPage-left {
	width: 90%;
}
.addressPage-left .addressPage-left-title {
	margin-bottom: 0.04rem;
	color: #323233;
	font-weight: 500;
	font-size: 0.14rem;
	font-family: "Microsoft YaHei";
	line-height: 0.2rem;
}
.addressPage-left-title-name {
	margin-right: 0.15rem;
}
.addressPage-left .addressPage-left-des {
	color: #7d7e80;
	font-size: 0.12rem;
	font-family: "Microsoft YaHei";
	line-height: 0.16rem;
}
.addressPage-footer {
	width: 100%;
	height: 0.5rem;
	text-align: center;
	line-height: 0.5rem;
	font-size: 0.16rem;
	background: #ee0a24;
	color: #fff;
}
</style>