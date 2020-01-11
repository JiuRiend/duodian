<template>
  <Layout title="订单详情" :isShow="true" :showFooter="false">
    <keep-alive>
    <div class="orderDetail">
      
      <div class="address" @click="goAddressPage">
        <div class="address-left">
          <h3 v-text="list.address"></h3>
          <p>
            <span class="address-left-name" v-text="list.name"></span>
            <span v-text="list.tel"></span>
          </p>
        </div>
        <div>
          <van-icon class="arrow" name="arrow" />
        </div>
      </div>

      <div class="list">
        <dl v-for="(item, index) in this.$store.state.product.product" :key="index">
          <dt class="dts"><img :src="item.img" alt=""></dt>
          <dd>
            <div class="title">{{ item.name }}</div>
            <div class="num">
              <span>
                单价:
                <span class="money">{{ item.presentPrice }}</span>
              </span>
              <span>数量: {{ item.count }}</span>
            </div>
          </dd>
        </dl>
      </div>

      <div>
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
      </div>

    </div>
    </keep-alive>
    <van-submit-bar :price="price" button-text="去支付" @submit="onSubmit" />

  </Layout>
</template>

<script>
import Layout from "components/layout";
import { SubmitBar ,Icon ,Popup , CouponCell, CouponList} from "vant";
const coupon = {
	available: 1,
	condition: "无使用门槛\n最多优惠12元",
	reason: "",
	value: 150,
	name: "优惠券名称",
	startAt: 1489104000,
	endAt: 1571881608861,
	valueDesc: "1.5",
	unitDesc: "元"
};
export default {
  components: {
    Layout,
    "van-submit-bar": SubmitBar,
    "van-icon":Icon,
    "van-popup":Popup,
    "van-coupon-list":CouponList,
    "van-coupon-cell":CouponCell,
    
  },
  data() {
    return {
      price: this.$store.state.product.sum*100,
      list:JSON.parse(localStorage.getItem('addressInfo')) ||
				{
					id: 0,
					name: "张三",
					tel: "13000000000",
					address: "八维研修学院(第二校区)宿舍楼2号楼"
        },
      showList: false,
      coupons: [coupon],
      disabledCoupons: [coupon],
      chosenCoupon: -1,
    };
  },
  created() {
    // console.log(this.$store.state.product.product)
  },
  methods: {
    onChange(index) {
			this.showList = false;
			this.chosenCoupon = index;
    },
    onExchange() {
			this.coupons.push(coupon);
		},
    onSubmit() {
      let prise = this.price;
      this.$router.history.push({
        path: "/payment",
        query: {
          pay_money: prise
        }
      });
    },
    goAddressPage() {
			this.$router.push({path:"/addressPage"});
		}
  }
};
</script>

<style lang='scss' scoped>
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  @extend %juzhong;
}
.orderDetail {
  background: #f5f5f5;
  height: 100%;
}

.address {
  width: 100%;
  height: 0.7rem;
  background: #fff;
  padding-left: 0.2rem;
}
.list {
  background: #fff;
  margin: 0 0.1rem;
  margin-top: 0.1rem;
}
.list dl {
  border-bottom: solid 0.01rem #eee;
  width: 100%;
  height: 0.8rem;
  background: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
dl dt {
  width: .8rem;
  height: .8rem;
  text-align: center;
  background: #cff;
}
dl dt img{
  width: 100%;
  height: 100%;
}
dl dd {
  flex: 1;
  height: 100%;
  padding-left: 0.1rem;
}
.title {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.18rem;
}
.num {
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
}
.money {
  color: #f99;
}

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