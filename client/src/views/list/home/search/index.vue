<template>
  <div>
    <input type="text" />
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <van-image
          v-if="activeIndex === 0"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="activeIndex === 1"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { TreeSelect, Image } from "vant";

export default {
  props: {},
  components: {
    VanTreeSelect: TreeSelect,
    VanImage: Image
  },
  data() {
    return {
      activeIndex: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>