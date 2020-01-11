<template>
	<div class="findAddress">
		<div class="header">
			<div class="q1">
				<span class="aaaaa" @click="to()">
					{{
					address ? address : "北京城区"
					}}
				</span>
				<van-icon name="arrow" class="ico" />
			</div>
			<div class="q2">
				<van-icon name="search" class="ico" />
				<input type="text" placeholder="搜索" @input="SearchAddress" />
			</div>
		</div>
		<div class="main">
			<li v-if="arrList" v-for="(item, index) in arrList" :key="index" @click="setActive(index, item)">
				{{ item.name }}
				<van-icon v-show="active == index" name="success" class="ico" />
			</li>
		</div>
	</div>
</template>

<script>
import { Icon } from "vant";
import { ScreenRegion } from "@/api/addressDetail";
export default {
	components: { vanIcon: Icon },
	data() {
		return {
			address: "",
			dz: [],
			arrList: [],
			active: null,
			id: null
		};
	},
	computed: {},
	methods: {
		SearchAddress(e) {
			setTimeout(function() {
				this.arrList = this.dz.filter(time => {
					return time.name.indexOf(e.target.value) > -1;
				});
			}, 1000);
		},
		to() {
			this.$router.go(-1);
		},
		setActive(i, item) {
			this.active = i;
			this.id = item.id;
			let _this = this;
			_this.$router.push({
				name: "address",
				params: {
					name: item.name
				}
			});
		}
	},

	created() {
		//路由传参获取地址
		this.address = this.$route.params.name;
		//请求地区
		let DZ = this.address ? this.address : "北京城区";
		ScreenRegion(DZ).then(res => {
			this.dz = res.data;
			this.arrList = res.data;
		});
	}
};
</script>

<style scoped>
#app,
.findAddress {
	width: 100%;
	height: 100%;
}
.findAddress {
	display: flex;
	background: #ccc;
	flex-direction: column;
}
.header {
	width: 100%;
	height: 0.5rem;
	background: #fff;
	display: flex;
}
.header .q1 {
	width: 25%;
	height: 100%;

	text-align: center;
	line-height: 0.4rem;
}

.header .q2 {
	width: 75%;
	height: 100%;

	position: relative;
}
.header .q1 .ico {
	height: 100%;
	width: 0.2rem;
	line-height: 0.55rem;
}
.header .q2 input {
	width: 90%;
	border: 0.01rem solid #ccc;
	height: 0.35rem;
	border-radius: 0.5rem;
	margin-top: 0.08rem;
	padding-left: 0.4rem;
}
.header .q2 .ico {
	position: absolute;
	height: 0.35rem;
	width: 0.5rem;
	font-size: 0.2rem;
	left: 0.2rem;
	top: 50%;
	margin-top: -0.1rem;
}
.main {
	width: 100%;
}

.main > li {
	width: 100%;
	height: 0.3rem;
	line-height: 0.3rem;
	border-bottom: 1px solid #000;
}
.main > li > .ico {
	color: orangered;
}
</style>