<template>
  <Layout title="支付完成" :isShow="false" :showFooter="false">
    <h1>支付成功</h1>
    <div class="page">
      您的宝贝儿已经成功购买了呢！
    </div>
    <div class="action">
      <div @click="toHome">
        回到首页
      </div>
      <div @click="toOrder">
        全部订单
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "components/layout";

export default {
  components: { Layout },
  methods: {
    toHome() {
      this.$router.push("/list/home");
    },
    toOrder() {
      this.$router.push("/list/orderType/1");
    }
  }
};
</script>

<style lang='scss' scoped>
h1 {
  height: 1.5rem;
  background: #fd7e7e;
  line-height: 1.5rem;
  text-align: center;
}
.page {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.action {
  height: 1rem;
  display: flex;
  justify-content: space-around;
  padding: 0 0.5rem;
  align-items: center;
}
.action div {
  width: 1rem;
  height: 0.3rem;
  border: solid 1px #fd7e7e;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.15rem;
  background: #fd7e7e;
  color: #fff;
  font-size: 0.16rem;
}
</style>