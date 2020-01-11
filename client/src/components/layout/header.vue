<template>
  <van-nav-bar
    v-if="!sure"
    class="header"
    :title="title"
    :left-arrow="isShow"
    @click-left="onClickLeft"
  />
  <header v-else-if="sure" class="el-header">
    <span @click="onClickLeft">取消</span>
    <span>{{ title }}</span>
    <span @click="onClickSure">完成</span>
  </header>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "Header",
  props: {
    title: {
      type: String
    },
    isShow: {
      type: Boolean
    },
    sure: {
      type: Boolean
    },
    options: {
      type: Object
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickSure() {
      // this.$router.histore.push("/");
      // console.log(this.options);
    }
  },
  components: {
    VanNavBar: NavBar
  }
};
</script>
<style lang='scss' scoped>
.header {
  color: #000;
  box-sizing: border-box;
  i {
    color: #000;
  }
  .van-ellipsis {
    color: #000;
    font-weight: bold;
    font-family: PingFangSC-Medium, PingFangSC;
  }
}
.el-header {
  height: 0.44rem;
  color: #000;
  font-size: 0.16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
