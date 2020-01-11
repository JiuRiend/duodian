<template>
  <Layout title="我的订单状态" :isShow="false">
    <div class="fixed-top">
      <van-tabs v-model="active" sticky>
        <!-- @click="onClick" -->
        <van-tab title="全部">
          <AllOrder></AllOrder>
        </van-tab>
        <van-tab title="已付款">
          <Unpaid></Unpaid>
        </van-tab>
        <van-tab title="待发货">
          <Deliver></Deliver>
        </van-tab>
        <van-tab title="已发货">
          <Donedeliver></Donedeliver>
        </van-tab>
        <van-tab title="已完成">
          <NotEval></NotEval>
        </van-tab>
      </van-tabs>
    </div>
  </Layout>
</template>

<script>
import Layout from "components/layout";
import AllOrder from "components/orderType/allOrder";
import Unpaid from "components/orderType/unpaid";
import Deliver from "components/orderType/deliver";
import Donedeliver from "components/orderType/doneDeliver";
import NotEval from "components/orderType/notEval";
import { Tab, Tabs } from "vant";
export default {
  components: {
    Layout,
    vanTab: Tab,
    vanTabs: Tabs,
    AllOrder,
    Unpaid,
    Deliver,
    Donedeliver,
    NotEval
  },
  data() {
    return {
      active: 0
    };
  },
  created() {
    let typeId = this.$route.params.id * 1;
    this.active = typeId;
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
.fixed-top {
  width: 100%;
  height: 0.5rem;
}
.van-tab__pane {
  width: 100%;
  min-height: 5.5rem;
  border-radius: 0.05rem;
  padding: 0.15rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>