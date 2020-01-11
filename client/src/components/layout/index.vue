<template>
  <div class="school-conatiner">
    <Header
      :title="title"
      :isShow="isShow"
      :sure="sure"
      :options="options"
    ></Header>
    <div class="main-content">
      <slot> </slot>
    </div>
    <Footer :showFooter="showFooter" :shopCar="shopCar" />
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
export default {
  name: "Layout",
  props: {
    title: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: true
    },
    shopCar: {
      type: Boolean
    },
    sure: {
      type: Boolean
    },
    options: {
      type: Object
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>