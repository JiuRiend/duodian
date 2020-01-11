<template>
	<div class="addressPage">
		<Header :title="title" :isShow="isShow" />
		<!-- 地址列表 -->
		<van-address-list
			v-model="chosenAddressId"
			:list="list"
			@add="onAdd"
			@edit="onEdit"
			@select="onSelect"
		/>
	</div>
</template>

<script>
import Header from "@/components/layout/header";
import { AddressList } from "vant";
import { getAddressList } from "@/api/addressEdit";

export default {
	data() {
		return {
			title: "地址列表",
			isShow: true,
			chosenAddressId: "0",
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
		vanAddressList: AddressList
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
		}
	}
};
</script>

<style lang=''>
</style>