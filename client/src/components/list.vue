<template>
  <div v-for="(item, index) in inner" :key="index" class="list">
    <div><img :src="item.img" alt="" /></div>
    <div class="in">
      <b>{{ item.name }}</b>
      <p class="share">累计{{ item.salesVolume }}万份/已拼{{ item.share }}份</p>
      <p class="shopType">{{ item.shopType }}</p>
      <p class="many">
        ￥<span class="presentPrice">{{ item.presentPrice }}</span
        ><s class="originalPrice">￥{{ item.originalPrice }}</s>
      </p>
      <van-icon name="cart-circle" />
    </div>
  </div>
</template>

<script>
// import { TreeSelect } from "vant";
import { search, allshop } from "api/cart.js";
// import Layout from "components/layout";
export default {
  props: {},
  components: {
    // Layout,
    // VanTreeSelect: TreeSelect,
    // VanImage: Image
  },
  data() {
    return {
      activeIndex: 0,
      items: [],
      inner: []
    };
  },
  computed: {},
  methods: {
    clicks(id) {
      this.activeIndex = id;
      this.eve(id);
    },
    eve(id) {
      allshop().then(res => {
        this.inner = res.data.filter(item => item.activeIndex == id);
        // console.log(this.inner);
      });
    }
  },
  created() {
    search().then(res => {
      this.items = res.data;
    }),
      this.eve(this.activeIndex);
  },
  mounted() {}
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

.container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.ipt {
  width: 78%;
  line-height: 0.33rem;
  border-radius: 0.15rem;
  outline: none;
  margin: 0.05rem 0.3rem;
  background: #eee;
  padding-left: 0.2rem;
  border: 0;
}

.bx {
  display: flex;
}

.left {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: #999;
}

.tab {
  flex: 1;
  text-align: center;
}

.active {
  background: #eee;
  color: #000;
}

.right {
  width: 90%;
}

.list {
  display: flex;
  margin: 0.08rem;
}

.list img {
  width: 1rem;
  height: 1rem;
}

.in {
  margin-left: 0.1rem;
}

.inner {
  margin: 0 5px;
}

b {
  font-size: 18px;
}

.share {
  font-size: 12px;
  color: #ccc;
}

.shopType {
  text-align: center;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background: orangered;
  color: #fff;
  margin-top: 5px;
}

.many {
  color: orangered;
}

.presentPrice {
  font-size: 18px;
}

.originalPrice {
  color: #ccc;
  margin-left: 5px;
}
</style>