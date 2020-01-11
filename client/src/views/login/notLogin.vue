<template>
  <Layout title="校园超市">

    <span class="btn_q"></span>
  </Layout>
</template>

<script>
import Layout from "components/layout";
export default {
  components: {
    Layout
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn_q {
  position: absolute;
  display: inline-block;
  width: 0.8rem;
  height: 0.3rem;
  background: transparent;
  top: 50%;
  left: 50%;
  margin-top: -0.15rem;
  margin-left: -0.4rem;
}
</style>