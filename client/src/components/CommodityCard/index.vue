<template>
  <van-card
    :title=dataObj.name
    :price=dataObj.presentPrice
    :origin-price=dataObj.originalPrice
    :thumb=dataObj.img
    @click='getDetail'
  >
    <div slot="tags">
      <p class="Sold">累计{{this.dataObj.salesVolume}}万份/已拼{{this.dataObj.share}}份</p>
      <van-tag plain type="danger" v-if="dataObj.shopType=='自营'">自营</van-tag>
      <van-tag plain type="danger">团购</van-tag>
    </div>
    <div slot="footer">
      <van-icon name="cart-circle-o" />
    </div>
  </van-card>
</template>

<script>
import { Card, Tag, Icon } from "vant";
export default {
  props: {
    //第二种方式
    dataObj: {
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: { [Card.name]: Card, [Tag.name]: Tag, [Icon.name]: Icon },
  methods: {
    getDetail() {
      this.$router.push(`/list/detail/${this.dataObj.id}`);
    }
  }
};
</script>
<style scoped  lang="scss">
.van-icon-cart-circle-o:before {
  overflow: hidden;
  border-radius: 50%;
  background: red;
  color: aliceblue;
  margin-top: -0.6em;
  content: "\F024";
  font-size: 0.3rem;
}
.Sold{
  font-size: 0.07rem;
  color: rgb(102, 99, 90)
}
</style>