<template>
  <div class="footerShopping">
    <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon" />
    <van-goods-action-icon
      icon="cart-o"
      text="购物车"
      info="5"
      @click="onClickIcon"
    />
    <van-button class="addToCat">
      加入购物车
    </van-button>
    <van-button class="purchaseButton">
      立即购买
    </van-button>
  </div>
</template>
<script>
import { Button, GoodsActionIcon } from "vant";
export default {
  name: "GoodsActionComponent",
  components: {
    vanGoodsActionIcon: GoodsActionIcon,
    vanButton: Button
  },
  methods: {
    onClickIcon() {}
  }
};
</script>
<style scoped>
.footerShopping {
  display: flex;
  height: 0.44rem;
  width: 100%;
}
.addToCat {
  background: rgba(255, 186, 47, 1);
  width: 1.5rem;
  height: 100%;
  color: #fff;
  border: none;
}
.purchaseButton {
  height: 100%;
  width: 1.5rem;
  background: #fe3212;
  color: #fff;
  border: none;
}
</style>