<template>
  <Layout title="优惠卷" :isShow="true" :showFooter="false">
   
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
 
  @click="showList = true"
/>

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
  </Layout>
</template>

<script>
import Layout from "components/layout";
import { CouponCell, CouponList,Popup } from 'vant';

const coupon = [{
   
  available: 12,
  condition: '无使用门槛',
  reason: '',
  value: 150,
  name: '水果卷',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '10',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '无使用门槛',
  reason: '',
  value: 150,
  name: '全部商品',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '11',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '无使用门槛',
  reason: '',
  value: 150,
  name: '全部商品',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.4',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '无使用门槛',
  reason: '',
  value: 150,
  name: '满减',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '8',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '满减',
  reason: '',
  value: 150,
  name: '全部商品',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '71',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '服装类',
  reason: '',
  value: 150,
  name: '刘姐服装',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '109',
  unitDesc: '元'
},
{
   
  available: 2,
  condition: '满减',
  reason: '',
  value: 150,
  name: '全部商品',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '70',
  unitDesc: '元'
}
];
const coupon1={
   
  available: 2,
  condition: '电器',
  reason: '',
  value: 150,
  name: '电器',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '24',
  unitDesc: '元'
} 
export default {
  components: { Layout,"van-coupon-cell":CouponCell,"van-coupon-list": CouponList,"van-popup":Popup, },
  data() {
    return {
             showList:false,
          chosenCoupon: null,
            coupons: coupon,
            disabledCoupons: [coupon1]
    };
  },
  mounted() {
    
  },
  methods: {
       onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },

};
</script>

<style lang='scss' scoped>
</style>