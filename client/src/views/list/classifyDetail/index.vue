<template>
  <Layout :title="title.name" :showFooter="false">
    <div class="container" ref="container">
      <div class="topBanner">
        <img v-lazy="title.iconBanner" alt="" />
      </div>
      <ul class="product_nav" ref="topNav">
        <span
          v-for="(item, index) in newType"
          v-text="item.text"
          :key="index"
          :style="{ color: active === index ? 'red' : null }"
          @click="tabClick(index)"
        ></span>
      </ul>
      <div class="product_list" v-for="(item, index) in newType" :key="index">
        <div class="product_list_title">
          <img v-lazy="item.titleImg" alt="" />
        </div>
        <item
          :clickToast="clickToast"
          v-for="item in classifyTypeList"
          :key="item.id"
          :item="item.activeIndex == index ? item : null"
        />
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "components/layout";
import item from "components/list_item";
import { filterProductType, search, productTitle, addIsBuy } from "api/cart";
import { Toast } from "vant";
export default {
  name: "classifyDetail",
  data() {
    return {
      classifyTypeList: [],
      type: [],
      title: {},
      active: 1,
      indexArr: [],
      newType: []
    };
  },
  components: {
    Layout,
    item
  },
  methods: {
    clickToast(id) {
      Toast.success("成功添加到购物车" + id);
      addIsBuy(id);
    },
    tabClick(index) {
      this.active = index;
      const arr = this.$refs.container.children;
      let product_list = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].className === "product_list") {
          product_list.push(arr[i]);
        }
      }
      let top = null;
      product_list.forEach((item, i) => {
        if (index == i) {
          top = item.offsetTop - 90;
        }
      });
      this.$refs.container.scrollTop = top;
      let topNav = this.$refs.topNav.offsetTop - 44;
      if (this.$refs.container.scrollTop >= topNav) {
        this.$refs.topNav.style = `position:fixed;top:44px;left:0;z-index:999`;
      }
    }
  },
  mounted() {
    let id = this.$route.params.id * 1;
    search().then(res => {
      this.type = res.data;
      this.newType = res.data.splice(id - 1, id * 2);
    });
    filterProductType(id).then(res => {
      this.classifyTypeList = res.result;
    });
    productTitle(id).then(res => {
      this.title = res.result;
      this.indexArr = this.title.index.split(",");
    });
  },
  updated() {
    this.$nextTick(() => {
      let topNav = this.$refs.topNav;
      this.$refs.container.addEventListener("scroll", () => {
        if (this.$refs.container.scrollTop <= topNav.offsetTop - 44) {
          this.$refs.topNav.style = "";
        }
      });
    });
  }
};
</script>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #eee;
  transform: all 1s linear 1s;
}
.topBanner {
  height: 1.15rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.product_nav {
  height: 0.44rem;
  width: 100%;
  display: flex;
  background: #fff;
  span {
    width: 20%;
    height: 100%;
    text-align: center;
    line-height: 0.44rem;
  }
}
.product_list {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  .product_list_title {
    height: 0.65rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
