<template>
  <div class="classify-wrap" v-show="isShow" @click.prevent="handlewrap">
    <ul class="classify-rank">
      <li v-for="item in rankTitle" :key="item.id" @click="handleRank(item.id)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rankTitle: [
        {
          id: 0,
          title: "智能排序"
        },
        {
          id: 1,
          title: "销量从高到低"
        },
        {
          id: 2,
          title: "价格从高到低"
        },
        {
          id: 3,
          title: "价格从低到高"
        }
      ]
    };
  },

  methods: {
    handleRank(id) {
      this.$emit("handleRank", id);
    },
    handlewrap() {
      this.$emit("handlewrap", false);
    }
  }
};
</script>

<style lang='scss' scoped>
.classify-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  .classify-rank {
    position: absolute;
    right: 0.38rem;
    top: 1rem;
    transition: 1s all;
    transform: scale(1);
    -webkit-transform: scale(1);
    width: 140px;
    background: #fff;
    border-radius: 10px;
    li {
      height: 0.44rem;
      padding-left: 0.2rem;
      line-height: 0.44rem;
    }
  }
}
</style>