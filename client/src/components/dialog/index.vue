<template>
  <div class="dialog" v-show="isShow">
    <div class="dialogue">
      <div class="dialogue-content">
        this is content
      </div>
      <div class="dialogue-control">
        <span @click="handleCancel">取消</span>
        <span @click="handleOk">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      isShow: true
    };
  },
  computed: {},
  methods: {
    handleCancel() {
      window.console.log(1);
      this.isShow = false;
    },
    handleOk() {
      this.isShow = false;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.dialog {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
}
.dialogue {
  width: 3rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 0.1rem;
  margin: 50% auto;
  display: flex;
  flex-direction: column;
  .dialogue-content {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .dialogue-control {
    display: flex;
    height: 1rem;
    justify-content: center;
    align-items: center;
    border: 0.01rem solid #e5e5ee;
    span {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &:nth-child(1) {
        border-right: 0.01rem solid #e5e5ee;
      }
    }
  }
}
</style>