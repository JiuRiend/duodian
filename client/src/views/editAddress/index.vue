<template>
	<div class="editAddress">
		<Header :title="title" :isShow="isShow" />
		<!-- 地址编辑 -->
		<van-address-edit
			:area-list="areaList"
			show-delete
			show-set-default
			show-search-result
			:address-info="addressInfo"
			@save="onSave"
			@delete="onDelete"
		/>
	</div>
</template>

<script>
import Header from "@/components/layout/header";
import { AddressEdit } from "vant";
import areaList from "@/utils/area";
import { delAddressList, updateAddressList } from "@/api/addressEdit";

export default {
	data() {
		return {
			title: "修改地址",
			isShow: true,
			areaList,
			addressInfo: {
				...this.$route.params.addressItem,
				addressDetail: this.$route.params.addressItem.address
			}
		};
	},
	components: {
		Header,
		vanAddressEdit: AddressEdit
	},
	methods: {
		//保存地址
		onSave(info) {
			window.console.log(info);
			updateAddressList(info).then(res => {
				if (res.code === 1) {
					this.$router.push("/addressPage");
				}
			});
		},
		// 删除地址
		onDelete(info) {
			delAddressList(info.id).then(res => {
				if (res.code === 1) {
					this.$router.push("/addressPage");
				}
			});
		}
	}
};
</script>

<style lang=''>
</style>