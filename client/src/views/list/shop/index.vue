<template>
  <Layout title="购物车" :isShow="false">
    <Cart />
  </Layout>
</template>

<script>
import Layout from "components/layout";
import Cart from "components/cart";
// import {mapState} from 'vuex'
export default {
  components: { Layout, Cart }
};
</script>

<style lang='scss' scoped>
</style>