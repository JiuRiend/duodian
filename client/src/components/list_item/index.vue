<template>
  <div class="product_item" v-if="item">
    <div class="product_item_img">
      <img :src="item.img" alt="" />
    </div>
    <div class="product_item_title">
      <p>{{ item.name }}</p>
    </div>
    <div class="product_item_price">
      <div>
        <s>￥{{ item.presentPrice }}</s>
        <span>￥{{ item.originalPrice }}</span>
      </div>
      <div @click="clickToast(item.id)" class="icon">
        +
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list_itemComponent",
  props: {
    item: Object,
    clickToast: Function
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.product_item {
  width: 30.5%;
  margin-left: 0.09rem;
  margin-top: 0.05rem;
  box-shadow: 0 0 3px;
  height: 2rem;
  background: #fff;
  border-radius: 0.04rem;
  padding: 0.05rem;
  font-size: 0.12rem;
  position: relative;
  .product_item_img {
    width: 100%;
    height: 45%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product_item_title {
    padding-top: 0.12rem;
    height: 0.45rem;
    margin-bottom: 0.12rem;
  }
  .product_item_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.65rem;
    div:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
    .icon {
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background: #ff8143;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.2rem;
    }
  }
}
</style>