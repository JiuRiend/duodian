<template>
  <div class="lct">
    <img src="../../assets/image/location.png" alt />
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    setTimeout(() => {
      this.$router.push("/list/home");
    }, 2000);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.lct {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 99.4%;
  }
}
</style>