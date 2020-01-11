<template>
  <div>
    <vanGoodsAction v-if="shopCar" />
    <footer class="footer" v-if="showFooter">
      <routerLink to="/list/home" tag="div"
        ><van-icon name="shop-o" /><span>首页</span></routerLink
      >
      <routerLink to="/list/classify" tag="div"
        ><van-icon name="apps-o" /><span>分类</span></routerLink
      >
      <routerLink to="/list/shop" tag="div"
        ><van-icon name="shopping-cart-o" /><span>购物车</span></routerLink
      >
      <routerLink to="/list/my" tag="div"
        ><van-icon name="user-circle-o" /><span>我的</span></routerLink
      >
    </footer>
  </div>
</template>

<script>
import { Icon } from "vant";
import vanGoodsAction from "components/goodsAction";
export default {
  props: {
    showFooter: {
      type: Boolean,
      default: true
    },
    shopCar: Boolean
  },
  components: {
    vanIcon: Icon,
    vanGoodsAction
  }
};
</script>

<style lang='scss' scoped>
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-link-active {
  color: red;
}
.footer {
  height: 0.44rem;
  border-top: 0.01rem solid #ccc;
  @extend %juzhong;
  div {
    flex: 1;
    i {
      font-size: 0.2rem;
      font-weight: 700;
      @extend %juzhong;
    }
    span {
      font-size: 0.11rem;
      @extend %juzhong;
      flex-wrap: wrap;
    }
  }
}
</style>