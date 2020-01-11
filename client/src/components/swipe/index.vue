<template>
  <van-swipe
    @change="onChange"
    class="swipeContainer"
    :style="{ height: height }"
    :width="width != 'undefined' ? width : null"
    :show-indicators="navBar"
  >
    <slot name="swipecontent"> </slot>
    <slot name="swipePagation"> </slot>
  </van-swipe>
</template>
<script>
import { Swipe } from "vant";
export default {
  name: "swipeComponent",
  props: {
    height: Number,
    width: Number,
    navBar: Boolean
  },
  data() {
    return {
      current: 0
    };
  },
  components: {
    vanSwipe: Swipe
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  mounted() {
    console.log(this.width);
  }
};
</script>
<style scoped>
.swipeContainer {
  width: 100%;
  position: relative;
}
.swipeNav {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>