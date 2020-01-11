<template>
  <div id="app">
    <Dialog />
    <transition :name="transitionName">
      <keep-alive>
        <router-view
          :class="transitionName"
          v-if="$route.meta.keepAlive"
        ></router-view>
        <router-view
          :class="transitionName"
          v-if="!$route.meta.keepAlive"
          :key="'time' + new Date().getTime()"
        ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Dialog from "components/dialog";
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right" //初始过渡动画方向
    };
  },
  components: {
    Dialog
  },
  watch: {
    $route() {
      let isBack = this.$router.isBack; //监听路由变化时为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style lang='scss'>
@import url("assets/css/style.css");
@import url("assets/css/reset.css");

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.5s;
  position: absolute;
  top: 0;
}
html,
body,
#app {
  overflow: hidden;
}
</style>
